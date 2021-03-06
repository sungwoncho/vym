import React from 'react';

const AddExtensionBtn = () => {

  // `chrome` is available globally on Chrome browser
  function installChromeExtension(e) {
    // e.preventDefault();
    chrome.webstore.install();
  }

  return (
    <div>
      <a onClick={installChromeExtension}
        href="#download-extension"
        className="btn btn-lg btn-info br0">
        <i className="fa fa-github"></i>
        Add Vym To Github
      </a>

      <p className="supported-browsers">Currently only supports Chrome</p>
    </div>
  );
};

export default AddExtensionBtn;
