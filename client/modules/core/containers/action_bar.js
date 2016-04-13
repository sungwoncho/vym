import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ActionBar from '../components/action_bar.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  goToSlide: actions.slideDecks.goToSlide,
  addSlide: actions.slideDecks.addSlide,
  removeSlide: actions.slideDecks.removeSlide,
  reorderSlide: actions.slideDecks.reorderSlide
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ActionBar);
