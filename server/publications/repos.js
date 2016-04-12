import {Repos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('repos', function (reposId) {
    return Repos.find(reposId);
  });
}
