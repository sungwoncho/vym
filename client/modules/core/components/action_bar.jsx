import React from 'react';

import ReorderAction from '../containers/reorder_action';

const ActionBar = ({currentSlideNum, slideDeck, goToSlide, addSlide, removeSlide}) => {

  function toPrevSlide() {
    goToSlide(currentSlideNum - 1);
  }

  function toNextSlide() {
    goToSlide(currentSlideNum + 1);
  }

  function onAddSlide() {
    addSlide(slideDeck._id, currentSlideNum + 1);
  }

  function onRemoveSlide() {
    removeSlide(slideDeck._id, currentSlideNum);
  }

  let totalSlidesCount = slideDeck.slides.length;

  return (
    <div className="action-bar">

      <div className="navgiation">
        <button onClick={toPrevSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-caret-left"></i>
        </button>

        <div className="current-progress">
          {currentSlideNum} / {totalSlidesCount}
        </div>

        <button onClick={toNextSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-caret-right"></i>
        </button>
      </div>

      <div className="actions">
        <button onClick={onAddSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-plus"></i>
        </button>
        <button onClick={onRemoveSlide} className="btn btn-sm btn-secondary">
          <i className="fa fa-minus"></i>
        </button>

        <ReorderAction slideDeck={slideDeck} currentSlideNum={currentSlideNum} />
      </div>
    </div>
  );
};

export default ActionBar;
