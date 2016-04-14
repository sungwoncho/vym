import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('currentUser', function () {
    return Meteor.users.find(this.userId, {
      fields: {
        'services.github.username': 1,
        scopes: 1
      }
    });
  });
}
