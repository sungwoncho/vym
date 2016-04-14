import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers.js';
import {getAvatarUrl} from '/client/modules/core/libs/helpers.js';


const HeaderUserMenu = ({logout, user}) => {
  let avatarUrl = getAvatarUrl({githubHandle: user.services.github.username});

  function onLogout(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className="nav-item dropdown pull-xs-right">
      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
        <img src={avatarUrl} alt="avatar" className="avatar" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href={pathFor('settings')}>
          Settings
        </a>
        <a className="dropdown-item" href="#" onClick={onLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default HeaderUserMenu;
