import React from 'react';

import EnsureLoggedIn from '../containers/ensure_logged_in';
import ReposContainer from '../containers/repos_container';

const Repos = ({repos}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <EnsureLoggedIn>
            <ReposContainer repos={repos} />
          </EnsureLoggedIn>
        </div>
      </div>

    </div>
  );
};

export default Repos;
