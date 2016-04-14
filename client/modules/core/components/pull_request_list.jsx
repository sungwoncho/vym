import React from 'react';

import PullRequestItem from '../containers/pull_request_item';

const PullRequestList = ({pullRequests, repo}) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {pullRequests.map(pr => (
        <PullRequestItem pullRequest={pr}
          repo={repo}
          key={pr.id} />
      ))}
    </tbody>
  </table>
);

export default PullRequestList;
