export default {
  getFiles({Meteor, Collections}, ownerName, repoName, prNumber) {
    Meteor.call('files.getAll', ownerName, repoName, prNumber, function (err, files) {
      files.forEach(function (file) {
        Collections.Files.insert(file); // Save to local collection
      });
    });
  },

  clearFiles({Collections}) {
    Collections.Files.remove({});
  }
};
