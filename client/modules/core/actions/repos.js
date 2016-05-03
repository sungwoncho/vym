export default {
  activateRepo({Meteor, FlowRouter}, repo) {
    repo.notAdded = false;
    Meteor.call('repos.activate', repo, function (err, res) {
      if (err) {
        return console.log(err);
      }

      FlowRouter.go('repo', {ownerName: repo.owner.login, repoName: repo.name});
    });
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
