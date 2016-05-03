import {Mongo} from 'meteor/mongo';
import _ from 'lodash';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const SlideDecks = new Mongo.Collection('slideDecks');

let schema = new SimpleSchema({
  ownerName: { // login of the owner of the repo
    type: String
  },
  repoName: {
    type: String
  },
  prNumber: {
    type: Number
  },
  slides: {
    type: [ Object ],
    blackbox: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (!this.isInsert) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

SlideDecks.attachSchema(schema);

SlideDecks.helpers({
  getSlideByNumber(number) {
    return _.find(this.slides, {number});
  }
});


export default SlideDecks;
