import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const RepoItem = ({repo, activateRepo, removeRepo}) => {
  function onActivate(e) {
    e.preventDefault();
    activateRepo(repo);
  }

  function onRemove(e) {
    e.preventDefault();
    removeRepo(repo._id);
  }

  function getGitHubUrl() {
    return `https://github.com/${repo.owner.login}/${repo.name}`;
  }

  return (
    <li className="repo-item">

      <div className="repo-item-info pull-xs-left">
        <span className="octicon octicon-repo"></span>
        <div className="repo-name mr10">
          {repo.owner.login}/{repo.name}
          <a href={getGitHubUrl()} target="_blank" className="repo-link">
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
          <a href="#" onClick={onActivate.bind(this)} className="btn btn-sm btn-secondary">
            <i className="fa fa-plus-circle"></i> Add
          </a> :
          <span>
            <a href="#" onClick={onRemove.bind(this)} className="btn btn-sm btn-secondary mr10">
              <i className="fa fa-minus-circle"></i> Remove
            </a>
            <a href={pathFor('repo', {ownerName: repo.owner.login, repoName: repo.name})}
              className="btn btn-sm btn-secondary">
              <i className="fa fa-dashboard"></i> Dashboard
            </a>
          </span>
        }
      </div>

    </li>
  );
};


export default RepoItem;
