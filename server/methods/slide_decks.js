import {SlideDecks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import shortid from 'shortid';
import _a from '../libs/array_utils';

export default function () {
  Meteor.methods({
    'slideDecks.ensureDeckExists'(ownerName, repoName, prNumber) {
      let sd = SlideDecks.findOne({ownerName, repoName, prNumber});

      if (!sd) {
        let newSdId = SlideDecks.insert({ownerName, repoName, prNumber, slides: []});
        Meteor.call('slideDecks.addSlideInDeck', newSdId, 1);
      }
    },

    'slideDecks.addSlideInDeck'(slideDeckId, slideNumber) {
      check(slideDeckId, String);
      check(slideNumber, Number);

      let slideDeck = SlideDecks.findOne(slideDeckId);
      let slides = slideDeck.slides;
      let newSlide = {
        number: slideNumber,
        uid: shortid.generate(),
        sections: []
      };

      slides = _a(slides).bumpNumbers(slideNumber, slides.length, 1)
                .add(newSlide)
                .sort()
                .getVal();

      SlideDecks.update(slideDeckId, {$set: {slides}});

      return newSlide;
    },

    /**
     * @return {Object} - an object containing info about neighboring slides.
     *         Used by the wizard to navigate to other slides after removal.
     */
    'slideDecks.removeSlideInDeck'(slideDeckId, slideNumber) {
      check(slideDeckId, String);
      check(slideNumber, Number);

      let slideDeck = SlideDecks.findOne(slideDeckId);
      let slides = slideDeck.slides;
      let targetSlide = slideDeck.getSlideByNumber(slideNumber);
      let nextSlide = slideDeck.getSlideByNumber(slideNumber + 1);
      let prevSlide = slideDeck.getSlideByNumber(slideNumber - 1);

      slides = _a(slides).bumpNumbers(slideNumber, slides.length, -1)
                         .remove({uid: targetSlide.uid})
                         .sort()
                         .getVal();

      SlideDecks.update(slideDeckId, {$set: {slides}});

      return {
        hasPrevSlide: Boolean(prevSlide),
        hasNextSlide: Boolean(nextSlide)
      };
    },

    'slideDecks.reorderSlide'(slideDeckId, fromSlideNumber, toSlideNumber) {
      check(slideDeckId, String);
      check(fromSlideNumber, Number);
      check(toSlideNumber, Number);

      let min = Math.min(fromSlideNumber, toSlideNumber);
      let max = Math.max(fromSlideNumber, toSlideNumber);
      let isMovingDown = toSlideNumber > fromSlideNumber;
      let delta = isMovingDown ? -1 : 1;

      let slideDeck = SlideDecks.findOne(slideDeckId);
      let slides = slideDeck.slides;
      let targetSlide = slideDeck.getSlideByNumber(fromSlideNumber);

      slides = _a(slides).bumpNumbers(min, max, delta)
                         .setElmNumber(targetSlide.uid, toSlideNumber)
                         .sort()
                         .getVal();

      SlideDecks.update(slideDeckId, {$set: {slides}});
    },

    'slideDecks.addToSlide'(slideDeckId, slideNumber, filename) {
      check(slideDeckId, String);
      check(slideNumber, Number);
      check(filename, String);

      let slideDeck = SlideDecks.findOne(slideDeckId);
      let slide = slideDeck.getSlideByNumber(slideNumber);
      slide.sections.push({
        type: 'file',
        filename
      });

      let slides = _a(slideDeck.slides)
        .update({number: slideNumber}, slide)
        .getVal();

      SlideDecks.update(slideDeckId, {$set: {slides}});
    },

    'slideDecks.removeFromSlide'(slideDeckId, slideNumber, sectionIndex) {
      check(slideDeckId, String);
      check(slideNumber, Number);
      check(sectionIndex, Number);

      let slideDeck = SlideDecks.findOne(slideDeckId);
      let slide = slideDeck.getSlideByNumber(slideNumber);

      slide.sections.splice(sectionIndex, 1);

      let slides = _a(slideDeck.slides)
        .update({number: slideNumber}, slide)
        .getVal();

      SlideDecks.update(slideDeckId, {$set: {slides}});
    }

  });
}
