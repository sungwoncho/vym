import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Repos from '../components/repos.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let reposToAdd = Collections.ReposToAdd.find({activated: false}).fetch();

  if (Meteor.subscribe('adminRepos').ready()) {
    let repos = Collections.Repos.find({adminId: this.userId});

    onData(null, {
      repos,
      reposToAdd
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  activateRepo: actions.repos.activateRepo,
  getReposToAdd: actions.repos.getReposToAdd,
  clearReposToAdd: actions.repos.clearReposToAdd
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Repos);
