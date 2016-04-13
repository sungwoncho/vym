import React from 'react';

import Section from '../containers/section';

const Preview = ({slideDeck, currentSlideNum}) => {
  let currentSlide = slideDeck.getSlideByNumber(currentSlideNum);

  return (
    <div className="preview">
      {
        currentSlide.sections.map((section, sectionIndex) => (
          <Section section={section}
            sectionIndex={sectionIndex}
            slideDeck={slideDeck}
            currentSlideNum={currentSlideNum} />
        ))
      }
    </div>
  );
};

export default Preview;
