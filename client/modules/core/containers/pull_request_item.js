import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PullRequestItem from '../components/pull_request_item.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  navigateToWizard: actions.slideDecks.navigateToWizard
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PullRequestItem);
