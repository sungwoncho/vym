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
      <div href={pathFor('repo', {ownerName: repo.owner.login, repoName: repo.name})}
        className="repo-item-link">
        <div>
          <span className="octicon octicon-repo"></span>
          <div className="repo-name mr10">
            {repo.owner.login}/{repo.name}
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
              <i className="fa fa-check"></i> Activate
            </a> :
            <a href="#" onClick={onRemove.bind(this)} className="btn btn-sm btn-secondary">
              <i className="fa fa-check"></i> Remove
            </a>
          }
          <a href={getGitHubUrl()} target="_blank" className="btn btn-sm btn-secondary">
            <i className="fa fa-github"></i> Repo
          </a>
        </div>
      </div>
    </li>
  );
};


export default RepoItem;
