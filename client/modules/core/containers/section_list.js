import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SectionList from '../components/section_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  reorderSection: actions.slideDecks.reorderSection
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SectionList);
