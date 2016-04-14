import React from 'react';
import classnames from 'classnames';

class AddRepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAdding: false};
  }

  render() {
    const {reposToAdd, activateRepo} = this.props;
    let klass = classnames('add-repo-container', {'hidden-xs-up': !this.state.isAdding});

    function onActivate(repo, e) {
      e.preventDefault();

      activateRepo(repo);
    }

    function toggleIsAdding(e) {
      e.preventDefault();
      this.setState({isAdding: !this.state.isAdding});
    }

    return (
      <div>
        <div className="text-xs-center">
          <a href="#" onClick={toggleIsAdding.bind(this)} className="btn btn-md btn-secondary">
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
        <ul className={klass}>
          {reposToAdd.map(repo => (
            <li>
              <a href="#">{repo.owner.login}/{repo.name}</a>
              <a href="#" onClick={onActivate.bind(this, repo)}>Activate</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default AddRepoList;
