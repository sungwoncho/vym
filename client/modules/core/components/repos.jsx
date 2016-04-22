import React from 'react';
import _ from 'lodash';

import RepoList from './repo_list.jsx';
import PrivateRepoToggleBtn from '../containers/private_repo_toggle_btn';
import EnsureLoggedIn from '../containers/ensure_logged_in';
import OnboardingGuide from '../containers/onboarding_guide';

const Repos = ({repos, addedRepos}) => {
  // mark all repos as notAdded (they come from GitHub)
  repos.map(repo => {
    repo.notAdded = true;
    return repo;
  });

  // Overwrite repo if added repo exists. notAdded flag is overwritten.
  addedRepos.forEach(addedRepo => {
    let matchingRepoIndex = _.findIndex(repos, {id: addedRepo.id});

    if (matchingRepoIndex > -1) {
      repos[matchingRepoIndex] = addedRepo;
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <EnsureLoggedIn>
            <OnboardingGuide />
            <div className="repo-list-container">
              <div className="repo-list-control">
                <PrivateRepoToggleBtn />
              </div>
              <RepoList repos={repos} type="add" />
            </div>
          </EnsureLoggedIn>
        </div>
      </div>

    </div>
  );
};

export default Repos;
