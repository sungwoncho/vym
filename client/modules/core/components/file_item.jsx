import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

function baseName(str) {
  return str.split(/[\\/]/).pop();
}

function getTooltipText(file, currentSlideNum) {
  if (file.vym.slideNumber) {
    return `Added on the slide #${file.vym.slideNumber}`;
  } else {
    return `Click to add to the slide #${currentSlideNum}`;
  }
}

const FileItem = ({file, addToSlide, slideDeck, currentSlideNum}) => {
  function onFileClick() {
    if (!file.vym.slideNumber) { // if not already added to a slide
      addToSlide(slideDeck._id, currentSlideNum, file.filename);
    }
  }

  let tooltip = <Tooltip>{getTooltipText(file, currentSlideNum)}</Tooltip>;

  return (
    <li className="file-item" onClick={onFileClick}>
      <OverlayTrigger
        overlay={tooltip} placement="right" id={file.filename}>
        <div>
          <div>{baseName(file.filename)}</div>
          <small>{file.filename}</small>

          {
            file.vym.slideNumber ?
              <div className="pull-xs-right">
                <i className="fa fa-check"></i> {file.vym.slideNumber}
              </div> :
              <span></span>
          }
        </div>
      </OverlayTrigger>
    </li>
  );
};

export default FileItem;
