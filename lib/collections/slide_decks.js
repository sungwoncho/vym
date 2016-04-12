import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';


const SlideDeck = new Mongo.Collection('slide_deck');

// let schema = new SimpleSchema({
//
// });
//
// SlideDeck.attachSchema(schema);

export default SlideDeck;
