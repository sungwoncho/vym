import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';
import _ from 'lodash';

const RepoItem = ({repo, activateRepo, removeRepo, currentUser}) => {
  let githubUrl = `https://github.com/${repo.owner.login}/${repo.name}`;

  return (
    <li className="repo-item">

      <div className="repo-item-info pull-xs-left">
        <span className="octicon octicon-repo"></span>
        <div className="repo-name mr10">
          {repo.owner.login}/{repo.name}
          <a href={githubUrl} target="_blank" className="repo-link">
            <i className="fa fa-github"></i>
          </a>
        </div>
        {
          repo.private ? <span className="label label-warning mr10">private</span> :
          <span></span>
        }
        {
          repo.fork ? <span className="label label-default mr10">fork</span> :
          <span></span>
        }
      </div>

      <div className="pull-xs-right">
        {
            repo.notAdded ?
            <ActivateButton currentUser={currentUser}
              repo={repo}
              activateRepo={activateRepo} /> :
            <DeactivateButton currentUser={currentUser}
              repo={repo}
              removeRepo={removeRepo} />
        }
      </div>

    </li>
  );
};

function checkIfAdmin(user, repo) {
  if (repo.adminIds) {
    return _.includes(repo.adminIds, user._id);
  } else {
    return repo.permissions.admin;
  }
}

const ActivateButton = ({currentUser, repo, activateRepo}) => {
  function onActivate(e) {
    e.preventDefault();
    activateRepo(repo);
  }

  if (checkIfAdmin(currentUser, repo)) {
    return (
      <a href="#" onClick={onActivate.bind(this)} className="btn btn-sm btn-secondary">
        <i className="fa fa-plus-circle"></i> Activate
      </a>
    );
  } else {
    return (
      <span>Only repo owner can activate</span>
    );
  }
};

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

export default RepoItem;
