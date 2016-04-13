import React from 'react';

import DiffTable from './diff_table/index.jsx';

const Section = ({file, removeFromSlide, slideDeck, currentSlideNum, sectionIndex}) => {
  function handleRemove() {
    removeFromSlide(slideDeck._id, currentSlideNum, sectionIndex);
  }

  return (
    <div className="section">
      <DiffTable file={file}
        handleRemove={handleRemove} />
    </div>
  );
};

export default Section;
