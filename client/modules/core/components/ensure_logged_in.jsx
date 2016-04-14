import React from 'react';

const EnsureLoggedIn = ({loggedIn, children}) => (
  <div>
    {loggedIn ? children : <NotLoggedInMessage />}
  </div>
);

const NotLoggedInMessage = () => (
  <div>
    Please log in to view this page. <a href="/">Go back to main page.</a>
  </div>
)

export default EnsureLoggedIn;
