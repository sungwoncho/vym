import {SlideDecks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('slideDecks', function (ownerName, repoName, prNumber) {
    check(ownerName, String);
    check(repoName, String);
    check(prNumber, Number);

    return SlideDecks.find({ownerName, repoName, prNumber});
  });
}
