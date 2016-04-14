import React from 'react';

class WizardLauncher extends React.Component {
  constructor(props) {
    super(props);
  }

  onWizardOpen(e) {
    e.preventDefault();
    const {navigateToWizard, repo} = this.props;
    let prNumber = this.refs.targetPrNumber.value;
    navigateToWizard(repo.owner.login, repo.name, prNumber);
  }

  render() {
    return (
      <div className="wizard-launcher">
        <div className="row">
          <div className="col-sm-4">
            <div className="input-group">
              <input type="number"
                className="form-control"
                placeholder="PR number"
                ref="targetPrNumber" />
              <span className="input-group-btn">
                <button onClick={this.onWizardOpen.bind(this)} className="btn btn-secondary">
                  Open Wizard
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardLauncher;
