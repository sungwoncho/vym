import {Repos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import GithubAPI from 'github4';
import _ from 'lodash';

import {getNextPage} from '../libs/utils';

let github = new GithubAPI({version: '3.0.0'});

export default function () {
  Meteor.methods({
    /**
     * Get all repositories from GitHub and only return ones that has not been
     * activated in Vym
     *
     * @return {Object} repoInfo
     * @return {Object[]} repoInfo.repos
     * @return {Number} repoInfo.nextPage
     */
    'repos.getAll'(userId) {
      let user = Meteor.users.findOne(userId || this.userId);

      let activatedRepoIds = Repos.find({$or: [
        {adminIds: user._id},
        {collaboratorIds: user._id}
      ]}).map(function (repo) {
        return repo.id;
      });

      let allRepos = [];

      github.authenticate({
        type: 'oauth',
        token: user.services.github.accessToken
      });

      function getRepos(page = 1) {
        let repos = Meteor.wrapAsync(github.repos.getAll)({page, per_page: 50});
        let nextPage = getNextPage(repos.meta.link);

        repos = repos.map(function (repo) {
          console.log('name', repo.name);
          repo.activated = activatedRepoIds.indexOf(repo.id) !== -1;
          return repo;
        });

        allRepos = allRepos.concat(repos);

        // Recurse if next page exists
        if (nextPage) {
          getRepos(nextPage);
        }
      }

      getRepos(1);

      return allRepos;
    },

    'repos.activate'(repo) {
      if (!repo.permissions.admin) {
        return console.log('You need to be an admin');
      }

      repo.adminIds = [ this.userId ];
      repo.collaboratorIds = [ this.userId ];

      Repos.insert(repo);
    },

    'repos.remove'(repoId) {
      let repo = Repos.findOne(repoId);

      if (!_.includes(repo.adminIds, this.userId)) {
        return;
      }

      Repos.remove(repoId);
    }
  });
}
