import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import GithubAPI from 'github4';

import {getNextPage} from '../libs/utils';

let github = new GithubAPI({version: '3.0.0'});

export default function () {
  Meteor.methods({
    'pullRequests.getAll'(ownerName, repoName, page = 1) {
      check(ownerName, String);
      check(repoName, String);
      check(page, Number);

      let user = Meteor.users.findOne(this.userId);

      github.authenticate({
        type: 'oauth',
        token: user.services.github.accessToken
      });

      let pullRequests = Meteor.wrapAsync(github.pullRequests.getAll)({
        user: ownerName,
        repo: repoName,
        state: 'all',
        per_page: 50,
        page
      });
      let link = pullRequests.meta.link;

      return {
        pullRequests,
        nextPage: getNextPage(link)
      };
    }
  });
}
