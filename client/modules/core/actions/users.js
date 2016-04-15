function githubAuth({Meteor, FlowRouter}, {scopes, redirectPath}, done) {
  Meteor.loginWithGithub({
    requestPermissions: scopes
  }, function (err) {
    if (err) {
      return console.log(err);
    }

    let userId = Meteor.userId();
    Meteor.call('users.setScopes', userId, scopes);
    // Meteor.call('users.syncAccessWithGithub');

    if (redirectPath) {
      FlowRouter.go(redirectPath);
    }

    if (done) {
      done();
    }
  });
}

export default {
  githubAuth({Meteor, FlowRouter}, {scopes, redirectPath}) {
    githubAuth({Meteor, FlowRouter}, {scopes, redirectPath})
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout(function (err) {
      if (err) {
        return console.log(err);
      }

      FlowRouter.go('home');
    });
  },

  addScope({Meteor, FlowRouter}, {scopeToAdd, redirectPath}, done) {
    Meteor.call('users.getCurrentScopes', function (err, oldScopes) {
      if (err) {
        return console.log('Error occurred while getting the current scope', err);
      }

      let newScopes = oldScopes;
      newScopes.push(scopeToAdd);
      newScopes = _.uniq(newScopes);
      githubAuth({Meteor, FlowRouter}, {scopes: newScopes, redirectPath}, done);
    });
  },

  removeScope({Meteor, FlowRouter}, {scopeToRemove, redirectPath}, done) {
    Meteor.call('users.getCurrentScopes', function (err, oldScopes) {
      if (err) {
        return console.log('Error occurred while getting the current scope', err);
      }

      let newScopes = _.without(oldScopes, scopeToRemove);
      githubAuth({Meteor, FlowRouter}, {scopes: newScopes, redirectPath}, done);
    });
  },

  createOrUpdateSubscription({Meteor}, token, done) {
    Meteor.call('users.createOrUpdateSubscription', token, done);
  }
};
