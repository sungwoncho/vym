import React from 'react';
import classnames from 'classnames';

import NormalRow from './normal_row.jsx';
import AddedRow from './added_row.jsx';
import DeletedRow from './deleted_row.jsx';
import ChunkRow from './chunk_row.jsx';

class DiffTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showingDiff: false};
  }

  render() {
    const {file, handleRemove} = this.props;
    let tableWrapperClass = classnames({
      hidden: !this.state.showingDiff
    });

    function onRemove() {
      handleRemove();
    }

    function toggleShowingDiff() {
      this.setState({showingDiff: !this.state.showingDiff});
    }

    return (
      <div className="dt-container">
        <div className="file-header">
          {file.filename}
          <div className="actions pull-right">
            <button onClick={onRemove} className="btn btn-sm btn-secondary">
              <i className="fa fa-trash"></i>
            </button>
            <button onClick={toggleShowingDiff.bind(this)} className="btn btn-sm btn-secondary">
              {
                this.state.showingDiff ?
                <i className="fa fa-caret-up"></i> :
                <i className="fa fa-caret-down"></i>
              }
            </button>
          </div>
        </div>

        <div className={tableWrapperClass}>
          <Table file={file} />
        </div>
      </div>
    );
  }
}

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
