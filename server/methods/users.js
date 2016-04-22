import stripeAPI from 'stripe';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Repos} from '/lib/collections';

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


    'users.createOrUpdateSubscription'(token, done) {
      let stripe = stripeAPI(Meteor.settings.stripeSecretKey);
      let currentUser = Meteor.users.findOne(this.userId);

      if (currentUser.stripeCustomerId) {
        let sub = Meteor.wrapAsync(stripe.customers.retrieveSubscription, stripe.customers)(
          currentUser.stripeCustomerId,
          currentUser.stripeSubscriptionId
        );

        Meteor.wrapAsync(stripe.customers.updateSubscription, stripe.customers)(
          currentUser.stripeCustomerId,
          currentUser.stripeSubscriptionId,
          {
            quantity: sub.quantity + 1
          }
        );

      } else {
        let customer = Meteor.wrapAsync(stripe.customers.create, stripe.customers)({
          source: token.id,
          plan: 'pro',
          email: token.email
        });
        let sub = customer.subscriptions.data[0];

        Meteor.users.update(this.userId, {
          $set: {
            stripeCustomerId: customer.id,
            stripeSubscriptionId: sub.id
          }
        });
      }

      if (done) {
        done();
      }
    },

    'users.syncAccessWithGithub'(targetUserId) {
      this.unblock();

      let allRepoIds = [];
      let userId = targetUserId || this.userId;

      console.log('syncing access with GitHub for', userId);

      let repos = Meteor.call('repos.getAll', userId);

      repos.forEach(function (repo) {
        allRepoIds = allRepoIds.concat(repo.id);

        let modifier = {
          $addToSet: {collaboratorIds: userId}
        };

        if (repo.permissions.admin) {
          modifier.$addToSet.adminIds = userId;
        }

        Repos.update({id: repo.id}, modifier);
      });

      // Deny access to all repos that the user no longer has access to
      Repos.update({
        id: {$nin: allRepoIds},
        $or: [
          {collaboratorIds: userId},
          {adminIds: userId}
        ]
      }, {
        $pull: {collaboratorIds: userId, adminIds: userId}
      },
      {multi: true});
    }

  });
}
