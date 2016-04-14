import React from 'react';
import classnames from 'classnames';

const AddRepoListItem = ({repo, activateRepo}) => {
  function onActivate(e) {
    e.preventDefault();

    activateRepo(repo);
  }

  function getRepoUrl(repo) {
    return `https://github.com/${repo.owner.login}/${repo.name}`;
  }

  return (
    <li className="repo-item">
      <div className="pull-xs-left">
        <span className="octicon octicon-repo mr10"></span>
        <div className="pull-xs-right">{repo.owner.login}/{repo.name}</div>
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
        <a href="#" onClick={onActivate.bind(this)} className="btn btn-sm btn-secondary">
          <i className="fa fa-check"></i> Activate
        </a>
        <a href={getRepoUrl(repo)} target="_blank" className="btn btn-sm btn-secondary">
          <i className="fa fa-github"></i> Repo
        </a>
      </div>
    </li>
  );
};

export default AddRepoListItem;
