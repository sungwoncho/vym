import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {ensureGuestUser} from '/client/modules/core/libs/auth';

import Home from '../components/home.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  githubAuth: actions.users.githubAuth,
  context: () => context
});

export default composeAll(
  composeWithTracker(ensureGuestUser),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
