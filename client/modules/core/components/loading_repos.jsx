import React from 'react';

const LoadingRepos = () => (
  <div className="text-xs-center loading-repos">
    <i className="fa fa-cog fa-spin loader" aria-hidden="true"></i>
    <div className="loading-message">
      One second while we fetch repos!
    </div>
  </div>
);

export default LoadingRepos;
