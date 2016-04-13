import React from 'react';

import FileList from '../containers/file_list';
import Preview from '../containers/preview';
import ActionBar from '../containers/action_bar';
import WizardHeader from '../containers/wizard_header';

class Wizard extends React.Component {
  componentDidMount() {
    const {getFiles, ownerName, repoName, prNumber, slideDeck} = this.props;

    getFiles(ownerName, repoName, prNumber, slideDeck);
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
        <WizardHeader slideDeck={slideDeck} />
        <div className="row w-main">
          <div className="w-sidebar col-sm-12 col-md-3">
            <FileList ownerName={ownerName}
              repoName={repoName}
              prNumber={prNumber}
              slideDeck={slideDeck}
              currentSlideNum={currentSlideNum} />
            <div className="w-sidebar-footer">
              vym
            </div>
          </div>
          <div className="col-sm-12 col-md-9 w-preview">
            <Preview slideDeck={slideDeck} currentSlideNum={currentSlideNum} />
            <ActionBar currentSlideNum={currentSlideNum} slideDeck={slideDeck} />
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
