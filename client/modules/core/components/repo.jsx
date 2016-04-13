import React from 'react';

const Repo = ({pullRequests, repo, navigateToWizard}) => {

  function onWizardOpen(ownerName, repoName, prNumber, e) {
    e.preventDefault();
    navigateToWizard(ownerName, repoName, prNumber);
  }

  console.log(repo);

  return (
    <div>
      {pullRequests.map(pr => (
        <a href="#" onClick={onWizardOpen.bind(this, repo.owner.login, repo.name, pr.number)}>
          {pr.title}
        </a>
      ))}
    </div>
  );
};

export default Repo;
