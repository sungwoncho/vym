import React from 'react';

import RepoItem from '../containers/repo_item';

const RepoList = ({repos}) => {
  return (
    <ul className="list-unstyled repo-list">
      {
        repos.map(function (repo) {
          return <RepoItem repo={repo}
                    key={repo.id} />;
        })
      }
    </ul>
  );
};

export default RepoList;
