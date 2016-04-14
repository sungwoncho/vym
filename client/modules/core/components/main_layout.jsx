import React from 'react';

import Header from '../containers/header';
import Footer from '../containers/footer';

const Layout = ({content = () => null }) => (
  <div>
    <Header />
    <div className="main">
      {content()}
    </div>
    <Footer />
  </div>
);

export default Layout;
