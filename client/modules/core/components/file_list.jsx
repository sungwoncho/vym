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

  function onFileClick() {
    if (!file.vym.slideNumber) { // if not already added to a slide
      addToSlide(slideDeck._id, currentSlideNum, file.filename);
    }
  }

  function baseName(str) {
    return str.split(/[\\/]/).pop();
  }

  return (
    <li className="file-item" onClick={onFileClick}>
      <div>{baseName(file.filename)}</div>
      <small>{file.filename}</small>

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
