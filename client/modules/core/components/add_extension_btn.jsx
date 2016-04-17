import React from 'react';

const AddExtensionBtn = () => {

  // `chrome` is available globally on Chrome browser
  function installChromeExtension(e) {
    e.preventDefault();
    chrome.webstore.install();
  }

  return (
    <a onClick={installChromeExtension}
      href="#"
      className="btn btn-lg btn-info mr20">
      <i className="fa fa-github"></i>
      Add Vym To Github
    </a>
  );
};

export default AddExtensionBtn;
