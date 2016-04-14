import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PrivateRepoToggleBtn from '../components/private_repo_toggle_btn.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let currentUser = Meteor.user();
    onData(null, {currentScopes: currentUser.scopes});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addScope: actions.users.addScope,
  removeScope: actions.users.removeScope
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PrivateRepoToggleBtn);
