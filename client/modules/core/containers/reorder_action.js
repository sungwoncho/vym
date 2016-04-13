import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ReorderAction from '../components/reorder_action.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  reorderSlide: actions.slideDecks.reorderSlide
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ReorderAction);
