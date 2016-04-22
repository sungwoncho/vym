import React from 'react';

import FileItem from '../containers/file_item';

const FileList = ({files, addToSlide, slideDeck, currentSlideNum}) => (
  <div className="file-list-container">
    <ul className="file-list list-unstyled">
      {files.map(file => (
        <FileItem file={file}
          slideDeck={slideDeck}
          currentSlideNum={currentSlideNum}
          key={file.filename} />
      ))}
    </ul>
  </div>
);

export default FileList;
