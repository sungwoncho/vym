import React from 'react';

import DiffTable from './diff_table/index.jsx';

const Section = ({file}) => (
  <div className="section">
    <DiffTable file={file} />
  </div>
);

export default Section;
