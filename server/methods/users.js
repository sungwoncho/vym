import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'users.setScopes'(userId, scopes) {
      check(userId, String);
      check(scopes, Array);

      Meteor.users.update(userId, {$set: {scopes}});
    },

    'users.getCurrentScopes'() {
      let currentUser = Meteor.user();

      return currentUser.scopes;
    },
  });
}
