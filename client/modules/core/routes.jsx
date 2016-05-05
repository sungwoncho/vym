import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout';
import WizardLayout from './components/wizard_layout.jsx';

import Home from './containers/home';
import Wizard from './containers/wizard';
import Repos from './containers/repos';
import Repo from './containers/repo';
import AutoLogin from './containers/auto_login';
import LoadingRepos from './components/loading_repos.jsx';
import Welcome from './components/welcome.jsx';

export default function (injectDeps, {FlowRouter, Meteor, Tracker}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const WizardLayoutCtx = injectDeps(WizardLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/repos', {
    name: 'repos',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<LoadingRepos />)
      });

      Tracker.autorun(function () {
        let user = Meteor.user();

        Tracker.nonreactive(function () {
          Meteor.call('repos.getAll', function (err, repos) {
            console.log('repos', repos);
            mount(MainLayoutCtx, {
              content: () => (<Repos repos={repos} />)
            });
          });
        });
      });
    }
  });

  FlowRouter.route('/auto_login', {
    name: 'auto_login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AutoLogin />)
      });
    }
  });

  FlowRouter.route('/welcome', {
    name: 'welcome',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Welcome />)
      })
    }
  });

  FlowRouter.route('/repo/:ownerName/:repoName', {
    name: 'repo',
    action({ownerName, repoName}) {
      mount(MainLayoutCtx, {
        content: () => (<Repo ownerName={ownerName} repoName={repoName} />)
      });
    }
  });

  FlowRouter.route('/repo/:ownerName/:repoName/pull/:prNumber', {
    name: 'wizard',
    action({ownerName, repoName, prNumber}, {currentSlideNum}) {
      mount(WizardLayoutCtx, {
        content: () => (<Wizard ownerName={ownerName}
          repoName={repoName}
          prNumber={parseInt(prNumber, 10)}
          currentSlideNum={parseInt(currentSlideNum, 10) || 1} />)
      });
    }
  });
}
