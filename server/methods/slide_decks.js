import {SlideDecks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'slideDecks.ensureDeckExists'(ownerName, repoName, prNumber) {
      let sd = SlideDecks.findOne({ownerName, repoName, prNumber});

      if (!sd) {
        SlideDecks.insert({ownerName, repoName, prNumber});
      }
    }
  });
}
