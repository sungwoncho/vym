/**
 * Redirects users to the dashboard if logged in.
 */
export function ensureGuestUser({context}, onData) {
  const {Meteor, FlowRouter} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    if (Meteor.user()) {
      FlowRouter.go('repos');
    }

    onData(null, {});
  }
}
