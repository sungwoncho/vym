import React from 'react';

import NormalRow from './normal_row.jsx';
import AddedRow from './added_row.jsx';
import DeletedRow from './deleted_row.jsx';
import ChunkRow from './chunk_row.jsx';

const DiffTable = ({file, handleRemove}) => {
  function onRemove() {
    handleRemove();
  }

  return (
    <div className="dt-container">
      <div className="file-header">
        {file.filename}
        <div className="actions pull-right">
          <button onClick={onRemove} className="btn btn-sm btn-secondary">
            <i className="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <Table file={file} />
    </div>
  );
};

const Table = ({file}) => (
  <div className="dt-wrapper">
    <table className="diff-table">
      <Chunk file={file} />
    </table>
  </div>
);

const Chunk = ({file}) => {
  return (
    <tbody>
      {
        file.patch.map((change, index) => {
          let RowComponent = RowMappings[change.type];
          return <RowComponent change={change} key={index} />;
        })
      }
    </tbody>
  );
};

let RowMappings = {
  normal: NormalRow,
  del: DeletedRow,
  add: AddedRow,
  chunk: ChunkRow
};

export default DiffTable;
