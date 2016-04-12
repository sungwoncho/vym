import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const Repos = ({repos, activateRepo}) => {

  function onActivate(repo, e) {
    e.preventDefault();

    activateRepo(repo);
  }

  return (
    <ul>
      {repos.map(repo => (
        <li>
          <a href={pathFor('repo',
            {ownerName: repo.owner.login, repoName: repo.name})}>{repo.name}</a>
          <a href="#" onClick={onActivate.bind(this, repo)}>Activate</a>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
