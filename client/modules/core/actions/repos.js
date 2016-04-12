export default {
  activateRepo({Meteor, FlowRouter}, repo) {
    Meteor.call('repos.activate', repo);
  }
}
