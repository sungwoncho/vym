import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FileItem from '../components/file_item.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addToSlide: actions.slideDecks.addToSlide
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FileItem);
