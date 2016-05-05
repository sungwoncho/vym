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
      <div className="text-xs-center auto-login">
        <i className="fa fa-chrome fa-spin loader" aria-hidden="true"></i>
        <div className="loading-message">
          Chrome extension is automatically logging you in...
        </div>
      </div>
    );
  }
}

export default AutoLogin;
