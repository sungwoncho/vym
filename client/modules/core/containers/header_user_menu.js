import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import HeaderUserMenu from '../components/header_user_menu.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  logout: actions.users.logout
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HeaderUserMenu);
