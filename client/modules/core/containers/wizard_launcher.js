import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import WizardLauncher from '../components/wizard_launcher.jsx';

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
)(WizardLauncher);
