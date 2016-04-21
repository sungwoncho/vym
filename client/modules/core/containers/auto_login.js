import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {ensureGuestUser} from '/client/modules/core/libs/auth';

import AutoLogin from '../components/auto_login.jsx';

export const composer = ({context}, onData) => {
  const {Accounts, Meteor} = context();

  if (Accounts.loginServicesConfigured()) {
    if (Meteor.subscribe('currentUser').ready()) {
      onData(null, {
        currentUser: Meteor.user()
      });
    }
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  githubAuth: actions.users.githubAuth,
  githubAuthRedirect: actions.users.githubAuthRedirect,
  redirectToRepos: actions.users.redirectToRepos
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AutoLogin);
