import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import WizardLayout from './components/wizard_layout.jsx';

import Home from './containers/home';
import Dashboard from './containers/dashboard';
import Wizard from './containers/wizard';
import Repos from './containers/repos';
import Repo from './containers/repo';

export default function (injectDeps, {FlowRouter}) {
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
        content: () => (<Repos />)
      });
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
