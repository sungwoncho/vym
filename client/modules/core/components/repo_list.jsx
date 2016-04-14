import React from 'react';

import AddRepoListItem from '../containers/add_repo_list_item';
import {pathFor} from '/client/modules/core/libs/helpers';

/**
 * @param {String} type - 'add', or 'normal'
 */
const RepoList = ({repos, type = 'normal'}) => {
  const ItemComponent = ItemComponentMap[type];

  return (
    <div className="repo-list-container">
      <ul className="list-unstyled repo-list">
        {
          repos.map(function (repo) {
            return <ItemComponent repo={repo}
                      key={repo._id} />;
          })
        }
      </ul>
    </div>
  );
};

const RepoItem = ({repo}) => (
  <li className="repo-item">
    <a href={pathFor('repo', {ownerName: repo.owner.login, repoName: repo.name})}
      className="repo-item-link">
      <div>
        <span className="octicon octicon-repo"></span>
        <div className="repo-name">
          {repo.owner.login}/{repo.name}
        </div>
      </div>
    </a>
  </li>
);

const ItemComponentMap = {
  add: AddRepoListItem,
  normal: RepoItem
};

export default RepoList;
