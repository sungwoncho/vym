import React from 'react';
import classnames from 'classnames';

import RepoList from './repo_list.jsx';
import PrivateRepoToggleBtn from '../containers/private_repo_toggle_btn';
import EnsureLoggedIn from '../containers/ensure_logged_in';

import {pathFor} from '/client/modules/core/libs/helpers';

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAdding: false};
  }

  componentDidMount() {
    const {getReposToAdd} = this.props;

    getReposToAdd();
  }

  componentWillUnmount() {
    const {clearReposToAdd} = this.props;

    clearReposToAdd();
  }

  refreshReposToAdd() {
    const {getReposToAdd, clearReposToAdd} = this.props;

    clearReposToAdd();
    getReposToAdd();
  }

  render() {
    const {repos, reposToAdd} = this.props;

    function toggleIsAdding(e) {
      e.preventDefault();
      this.setState({isAdding: !this.state.isAdding});
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <EnsureLoggedIn>
              <h2>Your repos</h2>
              <small>These are the repos you have access to</small>
              <ul className="repo-list list-unstyled">
                <RepoList repos={repos}
                  type="normal" />
              </ul>

              <div className="text-xs-center">
                <a href="#" onClick={
                    toggleIsAdding.bind(this)} className="btn btn-md btn-secondary">
                  {
                    this.state.isAdding ?
                    <div>
                      <i className="fa fa-caret-up"></i> Show less
                    </div> :
                    <div>
                      <i className="fa fa-caret-down"></i> Add repo
                    </div>
                  }
                </a>
              </div>

              <div className={classnames({'hidden-xs-up': !this.state.isAdding})}>
                <PrivateRepoToggleBtn onSuccess={this.refreshReposToAdd.bind(this)} />

                <RepoList repos={reposToAdd}
                  type="add" />
              </div>
            </EnsureLoggedIn>
          </div>
        </div>

      </div>
    );
  }
}

export default Repos;
