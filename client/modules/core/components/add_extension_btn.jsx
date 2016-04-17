import React from 'react';

const AddExtensionBtn = () => {

  // `chrome` is available globally on Chrome browser
  function installChromeExtension(e) {
    e.preventDefault();
    chrome.webstore.install();
  }

  return (
    <div>
      <a onClick={installChromeExtension}
        href="#"
        className="btn btn-lg btn-info">
        <i className="fa fa-github"></i>
        Add Vym To Github
      </a>

      <p className="supported-browsers">Currently only supports Chrome</p>
    </div>
  );
};

export default AddExtensionBtn;
