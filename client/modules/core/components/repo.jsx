import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const Repo = ({pullRequests, repo}) => (
  <div>
    {pullRequests.map(pr => (
      <a href={pathFor('wizard',
        {ownerName: repo.owner.login, repoName: repo.name, prNumber: pr.number})}>{pr.title}</a>
    ))}
  </div>
);

export default Repo;
