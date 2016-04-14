import React from 'react';

const Footer = ({currentDate}) => (
  <footer className="main-footer">
    vym &copy; {currentDate.getFullYear()}
  </footer>
);

export default Footer;
