import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Footer from '../components/footer.jsx';

export const composer = ({context}, onData) => {
  onData(null, {
    currentDate: new Date()
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Footer);
