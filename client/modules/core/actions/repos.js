export default {
  activateRepo({Meteor, Collections}, repo) {
    Collections.ReposToAdd.update({id: repo.id}, {activated: true}); // Update local collection
    Meteor.call('repos.activate', repo);
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
  }
};
