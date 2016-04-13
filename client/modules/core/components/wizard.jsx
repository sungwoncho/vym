import React from 'react';

import FileList from '../containers/file_list';
import Preview from '../containers/preview';

class Wizard extends React.Component {
  componentDidMount() {
    const {getFiles, ownerName, repoName, prNumber} = this.props;

    getFiles(ownerName, repoName, prNumber);
    document.body.classList.add('no-overscroll');
  }

  componentWillUnmount() {
    const {clearFiles} = this.props;

    clearFiles();
    document.body.classList.remove('no-overscroll');
  }

  render() {

    const {ownerName, repoName, prNumber, slideDeck, currentSlideNum} = this.props;

    return (
      <div className="container-fluid w-container">
        <div className="row wizard">
          <div className="col-xs-12 col-sm-3 w-sidebar">
            <FileList ownerName={ownerName} repoName={repoName} prNumber={prNumber} />
            <div className="w-sidebar-footer">
              hello
            </div>
          </div>
          <div className="col-xs-12 col-sm-9 w-main">
            <Preview slideDeck={slideDeck} currentSlideNum={currentSlideNum} />
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
