import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import LoginButton from '../components/login_button.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  githubAuth: actions.users.githubAuth
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(LoginButton);
