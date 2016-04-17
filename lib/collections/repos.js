import {Mongo} from 'meteor/mongo';


const Repos = new Mongo.Collection('repos');

// collaboratorIds: {
//   type: [ String ],
//   defaultValue: [],
//   optional: true
// },

export default Repos;
