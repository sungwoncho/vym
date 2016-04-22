import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NoRepoFound from '../components/no_repo_found.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NoRepoFound);
