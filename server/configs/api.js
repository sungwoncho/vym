import {Picker} from 'meteor/meteorhacks:picker';
import {Meteor} from 'meteor/meteor';
import {SlideDecks, Repos} from '/lib/collections';
import request from 'request';
import hat from 'hat';
import GithubAPI from 'github4';
import Promise from 'bluebird';
import _ from 'lodash';

export function configureAPI() {
  Picker.route('/api/v1/slide_decks/:ownerName/:repoName/:prNumber', function (params, req, res) {
    let vymToken = params.query.vymToken;

    let repo = Repos.findOne({'owner.login': params.ownerName, name: params.repoName});
    let user = Meteor.users.findOne({vymToken});

    if (_.includes(repo.collaboratorIds, user._id)) {
      let slideDeck = SlideDecks.findOne({
        ownerName: params.ownerName,
        repoName: params.repoName,
        prNumber: parseInt(params.prNumber, 10)
      });

      let response = JSON.stringify({slideDeck});
      res.end(response);
    } else {
      res.statusCode = 403;
      res.end();
    }
  });

  Picker.route('/api/v1/auth/github', function (params, req, res) {
    let redirectUri = Meteor.absoluteUrl('api/v1/auth/github/callback', {secure: true});
    let clientId = Meteor.settings.public.githubClientId;

    let oauthUrl =
      'https://github.com/login/oauth/authorize' +
      '?response_type=code' +
      `&redirect_uri=${redirectUri}` +
      '&scope=user:email,public_repo' +
      `&client_id=${clientId}`;

    res.writeHead(301, {Location: oauthUrl});
    res.end();
  });

  Picker.route('/api/v1/auth/github/callback', function (params, req, res) {
    let reqBody = {
      client_id: Meteor.settings.public.githubClientId,
      client_secret: Meteor.settings.githubClientSecret,
      code: params.query.code
    };

    request.post(
      {url: 'https://github.com/login/oauth/access_token', json: true, body: reqBody},
      Meteor.bindEnvironment(function (err, httpRes, body) {
        if (err) {
          return console.log(err);
        }


        let githubToken = body.access_token;
        let vymToken = hat();

        // If duplicate exists, return
        if (Meteor.users.findOne({'services.github.accessToken': githubToken})) {
          return;
        }

        let github = new GithubAPI({version: '3.0.0'});
        github.authenticate({
          type: 'oauth',
          token: githubToken
        });

        github.users.get({}, Meteor.bindEnvironment(function (err1, userData) {
          if (err1) {
            return console.log(err1);
          }

          github.users.getEmails({}, Meteor.bindEnvironment(function (err2, emails) {
            if (err2) {
              return console.log(err2);
            }

            let userDoc = {
              services: {
                github: {
                  id: userData.id,
                  accessToken: githubToken,
                  username: userData.login,
                  emails
                }
              },
              profile: {
                name: userData.name
              },
              vymToken
            };

            Meteor.users.insert(userDoc);

            res.writeHead(301, {Location: `https://github.com?vymToken=${vymToken}`});
            res.end();
          }));
        }));

      })
    );
  });

  /**
   * Checks if an activated repo exists
   */
  Picker.route('/api/v1/repo/:ownerName/:repoName', function (params, req, res) {
    let repo = Repos.findOne({
      'owner.login': params.ownerName,
      name: params.repoName,
    });

    let response = {
      activated: Boolean(repo)
    };

    res.write(JSON.stringify(response));
    res.end();
  });

  /**
   * Syncs repository access with GitHub
   */
  Picker.route('/api/v1/user/sync_access', function (params, req, res) {
    let user = Meteor.users.findOne({vymToken:  params.query.vymToken});

    if (user) {
      res.end();
      Meteor.call('users.syncAccessWithGithub', user._id);
    } else {
      res.statusCode = 403;
      res.end();
    }

  })
}
