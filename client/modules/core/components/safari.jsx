import React from 'react';

const Safari = ({children}) => (
  <div className="safari">
    <div className="window">
      <div className="titlebar">
        <div className="buttons">
          <div className="close-btn">
          </div>
          <div className="minimize">
          </div>
          <div className="zoom">
          </div>
        </div>

        <div className="url-address"></div>
      </div>
      {children}
    </div>
  </div>
);

export default Safari;
