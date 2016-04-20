import React from 'react';

import LoginButton from '../containers/login_button';
import AddExtensionBtn from './add_extension_btn.jsx';


const Pricing = () => (
  <div className="container-fluid">
    <div className="row pricing section">
      <div className="col-xs-12 text-xs-center pricing-title">
        <h2>Simple Pricing</h2>
      </div>

      <div className="col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="plan">
              <div className="plan-name">Open source</div>
              <div className="price">Free</div>
              <ul className="offer list-unstyled">
                <li className="offer-item">
                  <span className="quantity">Unlimited</span> slide decks
                </li>
                <li className="offer-item">
                  <span className="quantity">Unlimited</span> users
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="plan">
              <div className="plan-name">Private Repo</div>
              <div className="price">$12</div>
              <div className="frequency">/ month</div>
              <ul className="offer list-unstyled">
                <li className="offer-item">
                  <span className="quantity">Unlimited</span> slide decks
                </li>
                <li className="offer-item">
                  <span className="quantity">Unlimited</span> users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 text-xs-center">
        <p className="bulk-inquiry">
          Email <a href="mailto:hey@vym.io">hey@vym.io</a> for bulk pricing for
          your GitHub organization.
        </p>
      </div>
    </div>
  </div>
);

export default Pricing;
