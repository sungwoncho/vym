import React from 'react';

const FileList = ({files}) => (
  <div className="file-list">
    <ul className="list-unstyled">
      {files.map(file => (
        <li>{file.filename}</li>
      ))}
    </ul>
  </div>
);

export default FileList;
