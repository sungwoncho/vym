export default {
  githubAuth({Meteor, FlowRouter}, {scopes, redirectPath}) {
    Meteor.loginWithGithub({
      requestPermissions: scopes
    }, function (err) {
      if (err) {
        return console.log(err);
      }

      // let userId = Meteor.userId();
      // Meteor.call('users.setScopes', userId, scopes);
      // Meteor.call('users.syncAccessWithGithub');

      if (redirectPath) {
        FlowRouter.go(redirectPath);
      }
    });
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout(function (err) {
      if (err) {
        return console.log(err);
      }

      FlowRouter.go('home');
    });
  }
};
