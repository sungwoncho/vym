import React from 'react';

import {pathFor, checkIfAdmin} from '/client/modules/core/libs/helpers';

const DeactivateButton = ({currentUser, repo, removeRepo}) => {

  function onRemove(e) {
    e.preventDefault();
    removeRepo(repo._id);
  }

  if (checkIfAdmin(currentUser, repo)) {
    return (
      <span>
        <a href="#" onClick={onRemove.bind(this)} className="btn btn-sm btn-secondary mr10">
          <i className="fa fa-minus-circle"></i> Remove
        </a>
        <a href={pathFor('repo', {ownerName: repo.owner.login, repoName: repo.name})}
          className="btn btn-sm btn-secondary">
          <i className="fa fa-dashboard"></i> Dashboard
        </a>
      </span>
    );
  } else {
    return (
      <a href={pathFor('repo', {ownerName: repo.owner.login, repoName: repo.name})}
        className="btn btn-sm btn-secondary">
        <i className="fa fa-dashboard"></i> Dashboard
      </a>
    );
  }
};

export default DeactivateButton;
