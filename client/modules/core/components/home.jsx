import React from 'react';

import PricingSection from './pricing_section.jsx';
import LoginButton from '../containers/login_button';
import AddExtensionBtn from './add_extension_btn.jsx';

const Home = ({githubAuth}) => {
  function onLogin(e) {
    e.preventDefault();

    githubAuth({scopes: [ 'public_repo' ], redirectPath: 'dashboard'});
  }

  return (
    <div>
      <div className="hero">
        <h2 className="heading">Slide deck for your GitHub PR</h2>
        <p className="sub-heading">"I want to organize those files in my pull requests"</p>
        <AddExtensionBtn />
      </div>
      <div className="container">
        <div className="features row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <div className="col-xs-12 col-sm-4 feature">
                <h3>Turn it into slide deck</h3>
                <p>
                  Your pull request is now a slide deck. People can flip through
                  the slides instead of staring at a giant wall of text.
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 feature">
                <h3>Your code is secure</h3>
                <p>
                  Vym never saves your code anywhere. Vym is open source for
                  full transparency.
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 feature">
                <h3>Just works on GitHub</h3>
                <p>
                  Simply turn on the Chrome extension and your PR turns into a
                  slide deck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingSection />
    </div>
  );
};

export default Home;
