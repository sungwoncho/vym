import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ReposContainer from '../components/repos_container.jsx';
import LoadingRepos from '../components/loading_repos.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('collaboratingRepos').ready() &&
      Meteor.subscribe('currentUser').ready()) {
    console.log('composer running');
    let user = Meteor.user();
    let addedRepos = Collections.Repos.find({collaboratorIds: user._id}).fetch();
    console.log('addedRepos', addedRepos);
    onData(null, {
      addedRepos
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer, LoadingRepos),
  useDeps(depsMapper)
)(ReposContainer);
