import React from 'react';
import _ from 'lodash';

import RepoList from './repo_list.jsx';
import PrivateRepoToggleBtn from '../containers/private_repo_toggle_btn';
import EnsureLoggedIn from '../containers/ensure_logged_in';

const Repos = ({repos, addedRepos}) => {
  // mark all repos as notAdded (they come from GitHub)
  repos.map(repo => {
    repo.notAdded = true;
    return repo;
  });

  // Overwrite repo if added repo exists. notAdded flag is overwritten.
  addedRepos.forEach(addedRepo => {
    let matchingRepoIndex = _.findIndex(repos, {id: addedRepo.id});
    console.log('matching repo', addedRepo.full_name);
    console.log(addedRepo.notAdded);
    if (matchingRepoIndex) {
      console.log('bef', repos[matchingRepoIndex].notAdded);

      repos[matchingRepoIndex] = addedRepo;
      console.log('aft', repos[matchingRepoIndex].notAdded);

    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <EnsureLoggedIn>
            <ul className="repo-list list-unstyled">
              <PrivateRepoToggleBtn />
              <RepoList repos={repos} type="add" />
            </ul>
          </EnsureLoggedIn>
        </div>
      </div>

    </div>
  );
};

export default Repos;
