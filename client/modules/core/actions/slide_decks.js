export default {
  navigateToWizard({Meteor, Collections, FlowRouter}, ownerName, repoName, prNumber) {
    Meteor.call('slideDecks.ensureDeckExists', ownerName, repoName, prNumber, function (err) {
      if (err) {
        return console.log(err);
      }

      FlowRouter.go('wizard', {ownerName, repoName, prNumber});
    });
  },

  goToSlide({FlowRouter}, slideNum) {
    FlowRouter.setQueryParams({currentSlideNum: slideNum});
  },

  addSlide({Meteor, FlowRouter}, slideDeckId, slideNumber) {
    Meteor.call('slideDecks.addSlideInDeck', slideDeckId, slideNumber, function (err, newSlide) {
      FlowRouter.setQueryParams({currentSlideNum: newSlide.number});
    });
  },

  removeSlide({Meteor, FlowRouter}, slideDeckId, slideNumber) {
    Meteor.call('slideDecks.removeSlideInDeck', slideDeckId, slideNumber, function (err, res) {
      if (res.hasPrevSlide && !res.hasNextSlide) {
        FlowRouter.setQueryParams({currentSlideNum: slideNumber - 1});
      } else if (!res.hasPrevSlide && !res.hasNextSlide) {
        FlowRouter.setQueryParams({currentSlideNum: null});
      }
    });
  },

  reorderSlide({Meteor, FlowRouter}, slideDeckId, fromSlideNumber, toSlideNumber) {
    function onSuccess() {
      FlowRouter.setQueryParams({currentSlideNum: toSlideNumber});
    }

    Meteor.call('slideDecks.reorderSlide', slideDeckId, fromSlideNumber, toSlideNumber, onSuccess);
  },

  addToSlide({Meteor}, slideDeckId, slideNumber, filename) {
    Meteor.call('slideDecks.addToSlide', slideDeckId, slideNumber, filename);
  }
};
