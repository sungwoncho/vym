import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Repos from '../components/repos.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  Meteor.call('repos.getAll', function (err, res) {
    onData(null, {repos: res.repos});
  });
};

export const depsMapper = (context, actions) => ({
  activateRepo: actions.repos.activateRepo,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Repos);
