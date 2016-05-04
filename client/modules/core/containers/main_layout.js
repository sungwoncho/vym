import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MainLayout from '../components/main_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, _} = context();

  let renderUserSessionClass = !_.includes(
    [ 'auto_login', 'welcome' ], FlowRouter.current().route.name
  );

  if (Meteor.subscribe('currentUser').ready()) {
    let currentUser = Meteor.user();
    console.log(currentUser);
    onData(null, {
      currentUser,
      renderUserSessionClass
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);
