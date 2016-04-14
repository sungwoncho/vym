import React from 'react';

import LoginButton from '../containers/login_button';
import HeaderUserMenu from '../containers/header_user_menu';

const Header = ({currentUser}) => (

  <nav className="navbar navbar-light bg-faded">

    <a className="navbar-brand" href="/">
      Vym
    </a>

    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link" target="_blank" href="http://blog.vym.io">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" target="_blank" href="https://github.com/vymio/vym">Open Source</a>
      </li>
    </ul>

    {
      currentUser ?
      <HeaderUserMenu user={currentUser} /> :
      <LoginButton btnText="Login" btnClass="btn btn-success-outline pull-xs-right" />
    }

  </nav>
);

export default Header;
