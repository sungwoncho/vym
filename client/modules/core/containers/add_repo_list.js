import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddRepoList from '../components/add_repo_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  activateRepo: actions.repos.activateRepo
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddRepoList);
