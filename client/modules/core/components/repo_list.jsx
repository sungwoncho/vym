import React from 'react';

import RepoItem from '../containers/repo_item';

const RepoList = ({repos}) => {
  return (
    <div className="repo-list-container">
      <ul className="list-unstyled repo-list">
        {
          repos.map(function (repo) {
            return <RepoItem repo={repo}
                      key={repo.id} />;
          })
        }
      </ul>
    </div>
  );
};

export default RepoList;
