import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FileList from '../components/file_list.jsx';

export const composer = ({context, repoName, ownerName, prNumber}, onData) => {
  const {Collections} = context();

  // Local collection files is populated by wizard
  let files = Collections.Files.find().fetch();
  onData(null, {files});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addToSlide: actions.slideDecks.addToSlide
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FileList);
