import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Wizard from '../components/wizard.jsx';

export const composer = ({context, ownerName, repoName, prNumber}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('slideDecks', ownerName, repoName, prNumber).ready()) {
    let slideDeck = Collections.SlideDecks.findOne();

    onData(null, {slideDeck});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  getFiles: actions.files.getFiles
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Wizard);
