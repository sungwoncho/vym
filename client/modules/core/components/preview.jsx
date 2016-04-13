import React from 'react';

import Section from '../containers/section';

const Preview = ({slideDeck, currentSlideNum}) => {
  let currentSlide = slideDeck.getSlideByNumber(currentSlideNum);

  return (
    <div className="preview">
      {
        currentSlide.sections.map(section => (
          <Section section={section} />
        ))
      }
    </div>
  );
};

export default Preview;
