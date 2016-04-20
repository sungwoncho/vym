import {Mongo} from 'meteor/mongo';


const Repos = new Mongo.Collection('repos');

// collaboratorIds: {
//   type: [ String ],
//   defaultValue: [],
//   optional: true
// },

Repos.helpers({
  isDemo() {
    return this.name === 'vym' && this.owner.login === 'vymio';
  }
});

export default Repos;
