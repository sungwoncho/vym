import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DeactivateButton from '../components/deactivate_button.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  removeRepo: actions.repos.removeRepo
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DeactivateButton);
