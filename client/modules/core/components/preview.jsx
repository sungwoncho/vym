import React from 'react';

import SectionList from '../containers/section_list';
import EmptySlide from './empty_slide.jsx';

const Preview = ({slideDeck, currentSlideNum}) => {
  let currentSlide = slideDeck.getSlideByNumber(currentSlideNum);

  return (
    <div className="preview">
      {
        currentSlide.sections.length > 0 ?
          <SectionList sections={currentSlide.sections}
            slideDeck={slideDeck}
            currentSlideNum={currentSlideNum} /> : <EmptySlide />
      }
    </div>
  );
};

export default Preview;
