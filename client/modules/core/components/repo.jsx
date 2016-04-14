import React from 'react';

import EnsureLoggedIn from '../containers/ensure_logged_in';
import PullRequestList from '../containers/pull_request_list';
import WizardLauncher from '../containers/wizard_launcher';

const Repo = ({pullRequests, repo}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <EnsureLoggedIn>
            <h2>
              {repo.owner.login}/{repo.name}
              <small>
                <a href={repo.html_url} className="ml10"><i className="fa fa-github"></i></a>
              </small>
            </h2>
            <p>
              {repo.description}
            </p>

            <hr />

            <p className="text-muted">
              Click on a pull request to launch the wizard.
            </p>

            <p className="text-muted">
              Or just type pull request number and press launch.
            </p>

            <WizardLauncher repo={repo} />

            <PullRequestList pullRequests={pullRequests}
              repo={repo} />
          </EnsureLoggedIn>
        </div>
      </div>
    </div>
  );
};

export default Repo;
