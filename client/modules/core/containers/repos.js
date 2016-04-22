import {useDeps, composeAll, composeWithTracker, composeWithPromise, compose} from 'mantra-core';

import Repos from '../components/repos.jsx';
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
)(Repos);
