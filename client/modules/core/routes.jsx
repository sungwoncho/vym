import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import Dashboard from './containers/dashboard';
import Wizard from './containers/wizard';
import Repos from './containers/repos';
import Repo from './containers/repo';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Dashboard />)
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
    name: 'repos',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Wizard />)
      });
    }
  });
}
