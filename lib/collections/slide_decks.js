import {Mongo} from 'meteor/mongo';
import _ from 'lodash';

// import {SimpleSchema} from 'meteor/aldeed:simple-schema';


const SlideDecks = new Mongo.Collection('slideDecks');

// let schema = new SimpleSchema({
//
// });
//
// SlideDeck.attachSchema(schema);

SlideDecks.helpers({
  getSlideByNumber(number) {
    return _.find(this.slides, {number});
  }
});


export default SlideDecks;
