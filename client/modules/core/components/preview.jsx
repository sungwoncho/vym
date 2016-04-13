import React from 'react';

import SectionList from '../containers/section_list';

const Preview = ({slideDeck, currentSlideNum}) => {
  let currentSlide = slideDeck.getSlideByNumber(currentSlideNum);

  return (
    <div className="preview">
      <SectionList sections={currentSlide.sections}
        slideDeck={slideDeck}
        currentSlideNum={currentSlideNum} />
    </div>
  );
};

export default Preview;
