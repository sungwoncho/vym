import React from 'react';

const WizardHeader = ({slideDeck}) => {
  let prSlideDeckUrl =
    'https://github.com/' +
    `${slideDeck.ownerName}/` +
    `${slideDeck.repoName}/` +
    'pull/' +
    `${slideDeck.prNumber}` +
    '/files#slides';

  return (
    <div className="w-header">
      <div>
        Pull request #{slideDeck.prNumber}
      </div>
      <a href={prSlideDeckUrl} target="_blank" className="ml10"><i className="fa fa-github"></i>View slide deck on GitHub</a>
    </div>
  );
};

export default WizardHeader;
