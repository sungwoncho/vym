import {useDeps, composeAll, composeWithTracker, composeWithPromise, compose} from 'mantra-core';

import Repos from '../components/repos.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Repos);
