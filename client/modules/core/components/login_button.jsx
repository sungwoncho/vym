import React from 'react';

const LoginButton = ({githubAuth, btnText = 'Set up vym', btnClass = 'btn btn-success btn-lg'}) => {
  function login(e) {
    e.preventDefault();
    githubAuth({scopes: [ 'public_repo' ], redirectPath: 'repos'});
  }

  return (
    <a href="" className={btnClass} onClick={login}>
      <i className="fa fa-github"></i>
      {btnText}
    </a>
  );
};

export default LoginButton;
