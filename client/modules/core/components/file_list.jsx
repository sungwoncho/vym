import React from 'react';

const FileList = ({files, addToSlide, slideDeck, currentSlideNum}) => (
  <div className="file-list-container">
    <ul className="file-list list-unstyled">
      {files.map(file => (
        <FileItem file={file}
          addToSlide={addToSlide}
          slideDeck={slideDeck}
          currentSlideNum={currentSlideNum} />
      ))}
    </ul>
  </div>
);

const FileItem = ({file, addToSlide, slideDeck, currentSlideNum}) => {

  function onFileAdd() {
    addToSlide(slideDeck._id, currentSlideNum, file.filename);
  }

  return (
    <li className="file-item" onClick={onFileAdd}>
      {file.filename}

      {
        file.vym.slideNumber ?
          <div className="pull-xs-right">
            <i className="fa fa-check"></i> {file.vym.slideNumber}
          </div> :
          <span></span>
      }
    </li>
  );
};

export default FileList;
