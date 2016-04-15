import stripeAPI from 'stripe';
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
    }

  });
}
