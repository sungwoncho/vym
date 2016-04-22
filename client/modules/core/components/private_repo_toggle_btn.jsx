import React from 'react';
import _ from 'lodash';

const PrivateRepoToggleBtn = ({addScope, removeScope, currentScopes, reloadRoute}) => {
  function onSuccess() {
    reloadRoute();
  }

  function handleAddScope(scopeToAdd, e) {
    e.preventDefault();
    addScope({scopeToAdd}, onSuccess);
  }

  function handleRemoveScope(scopeToRemove, e) {
    e.preventDefault();
    removeScope({scopeToRemove}, onSuccess);
  }

  if (_.includes(currentScopes, 'repo')) {
    return (
      <a href="#"
        className="btn btn-sm btn-secondary"
        onClick={handleRemoveScope.bind(this, 'repo')}>
        <i className="fa fa-lock"></i> Exclude private repos
      </a>
    );
  } else {
    return (
      <a href="#"
        className="btn btn-sm btn-secondary"
        onClick={handleAddScope.bind(this, 'repo')}>
        <i className="fa fa-lock"></i> Include private repos
      </a>
    );
  }
};

export default PrivateRepoToggleBtn;
