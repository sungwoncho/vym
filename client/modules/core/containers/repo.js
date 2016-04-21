import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Repo from '../components/repo.jsx';

export const composer = ({context, ownerName, repoName}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('repo', ownerName, repoName).ready()) {
    let repo = Collections.Repos.findOne({'owner.login': ownerName, name: repoName});

    Meteor.call('pullRequests.getAll', ownerName, repoName, function (err, res) {
      onData(null, {pullRequests: res.pullRequests, repo});
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  navigateToWizard: actions.slideDecks.navigateToWizard
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Repo);
