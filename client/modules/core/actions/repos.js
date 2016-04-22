export default {
  activateRepo({Meteor}, repo) {
    repo.notAdded = false;
    Meteor.call('repos.activate', repo);
  },

  removeRepo({Meteor}, repoId) {
    Meteor.call('repos.remove', repoId);
  },

  getReposToAdd({Meteor, Collections}) {
    Meteor.call('repos.getAll', function (err, repos) {
      repos.forEach(function (repo) {
        Collections.ReposToAdd.insert(repo);
      });
    });
  },

  clearReposToAdd({Collections}) {
    Collections.ReposToAdd.remove({});
  },

  reloadRoute({FlowRouter}) {
    FlowRouter.reload();
  }
};
