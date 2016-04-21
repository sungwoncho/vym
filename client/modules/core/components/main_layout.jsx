import React from 'react';
import classnames from 'classnames';

import Header from '../containers/header';
import Footer from '../containers/footer';

const Layout = ({currentUser, renderUserSessionClass, content = () => null}) => {
  let loginClass = classnames({
    'vym-logged-in': renderUserSessionClass && Boolean(currentUser),
    'vym-not-logged-in': renderUserSessionClass && !Boolean(currentUser)
  });

  return (
    <div className={loginClass}>
      <Header />
      <div className="main">
        {content()}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
