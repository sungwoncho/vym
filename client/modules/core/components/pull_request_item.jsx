import React from 'react';

const PullRequestItem = ({repo, navigateToWizard, pullRequest}) => {

  function onWizardOpen(ownerName, repoName, prNumber, e) {
    e.preventDefault();
    navigateToWizard(ownerName, repoName, prNumber);
  }

  return (
    <tr className="pr-item"
      onClick={onWizardOpen.bind(this, repo.owner.login, repo.name, pullRequest.number)}>
      <th>#{pullRequest.number}</th>
      <th>{pullRequest.title}</th>
      <th>{pullRequest.state}</th>
    </tr>
  );
};

export default PullRequestItem;
