import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ActivateButton from '../components/activate_button.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let stripePublishableKey = Meteor.settings.public.stripePublishableKey;
  onData(null, {stripePublishableKey});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  activateRepo: actions.repos.activateRepo,
  createOrUpdateSubscription: actions.users.createOrUpdateSubscription
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ActivateButton);
