import React from 'react';

const Home = ({githubAuth}) => {
  function onLogin(e) {
    e.preventDefault();

    githubAuth({scopes: [ 'public_repo' ], redirectPath: 'dashboard'});
  }

  return (
    <div>
      <a href="#" onClick={onLogin}>Login</a>
    </div>
  );
};

export default Home;
