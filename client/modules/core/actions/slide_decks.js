export default {
  navigateToWizard({Meteor, Collections, FlowRouter}, ownerName, repoName, prNumber) {
    Meteor.call('slideDecks.ensureDeckExists', ownerName, repoName, prNumber, function (err) {
      if (err) {
        return console.log(err);
      }

      FlowRouter.go('wizard', {ownerName, repoName, prNumber});
    });
  }
};
