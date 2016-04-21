import React from 'react';

class AutoLogin extends React.Component {
  componentDidMount() {
    const {currentUser, githubAuthRedirect, redirectToRepos} = this.props;

    if (currentUser) {
      redirectToRepos();
    } else {
      githubAuthRedirect({scopes: [ 'public_repo' ]});
    }
  }

  render() {

    return (
      <div>
        You are being logged in
      </div>
    );
  }
}

export default AutoLogin;
