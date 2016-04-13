import React from 'react';

import FileList from '../containers/file_list';
import Preview from '../containers/preview';
import ActionBar from '../containers/action_bar';

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
      <div className="container-fluid">
        <div className="row w-container">
          <div className="col-sm-12 col-md-3 w-sidebar">
            <FileList ownerName={ownerName} repoName={repoName} prNumber={prNumber} />
            <div className="w-sidebar-footer">
              hello
            </div>
          </div>
          <div className="col-sm-12 col-md-9 w-main">
            <Preview slideDeck={slideDeck} currentSlideNum={currentSlideNum} />
            <ActionBar currentSlideNum={currentSlideNum} slideDeck={slideDeck} />
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
