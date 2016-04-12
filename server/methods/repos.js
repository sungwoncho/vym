import {Repos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import GithubAPI from 'github4';

import {getNextPage} from '../libs/utils';

let github = new GithubAPI({version: '3.0.0'});

export default function () {
  Meteor.methods({
    /**
     * @return {Object} repoInfo
     * @return {Object[]} repoInfo.repos
     * @return {Number} repoInfo.nextPage
     */
    'repos.getAll'(page = 1) {
      let user = Meteor.users.findOne(this.userId);

      github.authenticate({
        type: 'oauth',
        token: user.services.github.accessToken
      });

      let repos = Meteor.wrapAsync(github.repos.getAll)({page, per_page: 50});
      let link = repos.meta.link;

      return {
        repos,
        nextPage: getNextPage(link)
      };
    },

    'repos.activate'(repo) {
      Repos.insert(repo);
    }
  });
}
