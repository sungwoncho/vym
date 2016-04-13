import {Repos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('repo', function (ownerName, repoName) {
    check(ownerName, String);
    check(repoName, String);

    return Repos.find({'owner.login': ownerName, name: repoName});
  });
}
