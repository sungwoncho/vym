import React from 'react';

import {pathFor, checkIfAdmin} from '/client/modules/core/libs/helpers';
import ActivateButton from '../containers/activate_button';
import DeactivateButton from '../containers/deactivate_button';

const RepoItem = ({repo, currentUser}) => {
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
            repo={repo} /> :
          <DeactivateButton currentUser={currentUser}
            repo={repo} />
        }
      </div>

    </li>
  );
};

export default RepoItem;
