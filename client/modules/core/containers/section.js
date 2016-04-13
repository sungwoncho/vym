import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Section from '../components/section.jsx';

export const composer = ({context, section}, onData) => {
  const {Collections} = context();

  let file = Collections.Files.findOne({filename: section.filename});
  if (file) {
    onData(null, {file});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  removeFromSlide: actions.slideDecks.removeFromSlide
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Section);
