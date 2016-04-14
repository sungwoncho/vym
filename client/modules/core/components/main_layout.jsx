import React from 'react';

import Header from '../containers/header';

const Layout = ({content = () => null }) => (
  <div>
    <Header />
    <div className="main">
      {content()}
    </div>
  </div>
);

export default Layout;
