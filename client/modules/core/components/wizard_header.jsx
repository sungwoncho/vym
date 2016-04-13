import React from 'react';

const WizardHeader = ({slideDeck}) => {
  let prHref = `https://github.com/${slideDeck.ownerName}/${slideDeck.repoName}/pull/${slideDeck.prNumber}`;

  return (
    <div className="w-header">
      PR #{slideDeck.prNumber} <a href={prHref} target="_blank"><i className="fa fa-github"></i></a>
    </div>
  );
};

export default WizardHeader;
