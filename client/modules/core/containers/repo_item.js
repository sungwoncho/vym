import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RepoItem from '../components/repo_item.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let currentUser = Meteor.user();
    onData(null, {currentUser});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  activateRepo: actions.repos.activateRepo,
  removeRepo: actions.repos.removeRepo
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RepoItem);
