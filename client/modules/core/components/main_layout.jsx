import React from 'react';

import Header from '../containers/header';

const Layout = ({content = () => null }) => (
  <div>
    <Header />
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
