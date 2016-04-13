import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import GithubAPI from 'github4';
import parseDiff from 'parse-diff';

let github = new GithubAPI({version: '3.0.0'});

export default function () {
  Meteor.methods({
    'files.getAll'(ownerName, repoName, prNumber) {
      check(ownerName, String);
      check(repoName, String);
      check(prNumber, Number);

      let user = Meteor.users.findOne(this.userId);

      github.authenticate({
        type: 'oauth',
        token: user.services.github.accessToken
      });

      let pullRequest = Meteor.wrapAsync(github.pullRequests.get)({
        user: ownerName,
        repo: repoName,
        number: prNumber
      });

      let response = Meteor.wrapAsync(github.repos.compareCommits)({
        user: ownerName,
        repo: repoName,
        base: pullRequest.base.sha,
        head: pullRequest.head.sha
      });

      let files = response.files;
      files.forEach(function (file) {
        if (file.patch) {
          file.patch = parseDiff(file.patch);
        } else {
          file.patch = [];
        }
      });

      return files;
    }
  });
}
