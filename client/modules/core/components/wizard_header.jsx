import React from 'react';

const WizardHeader = ({slideDeck}) => {
  let prUrl =
    'https://github.com/' +
    `${slideDeck.ownerName}/` +
    `${slideDeck.repoName}/` +
    'pull/' +
    `${slideDeck.prNumber}`;

  return (
    <div className="w-header">
      Pull request #{slideDeck.prNumber}
      <a href={prUrl} target="_blank" className="ml10"><i className="fa fa-github"></i></a>
    </div>
  );
};

export default WizardHeader;
