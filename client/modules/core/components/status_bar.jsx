import React from 'react';

const StatusBar = ({slideDeck}) => (
  <div className="pres-status-bar">
    <div className="navgiation">
      {
        canNavigate() ?
        <button onClick={toPrevSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-caret-left"></i>
        </button> :
        <span></span>
      }
      <div className="current-progress">
        {currentSlideNumber} / {totalSlidesCount}
      </div>
      {
        canNavigate() ?
        <button onClick={toNextSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-caret-right"></i>
        </button> :
        <span></span>
      }
      <FullscreenBtn />
    </div>
    <div className="pres-meta">
      {slideDeck.title} - For PR #{slideDeck.prNumber}
    </div>
  </div>
);

export default StatusBar;
