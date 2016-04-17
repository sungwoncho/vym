import React from 'react';

import PricingSection from './pricing_section.jsx';
import AddExtensionBtn from './add_extension_btn.jsx';
import Safari from './safari.jsx';
import WorkflowCarousel from './workflow_carousel.jsx';

const Home = ({githubAuth}) => {
  function onLogin(e) {
    e.preventDefault();

    githubAuth({scopes: [ 'public_repo' ], redirectPath: 'dashboard'});
  }

  return (
    <div>
      <div className="hero">
        <h2 className="heading">Slide decks for your GitHub PR</h2>
        <p className="sub-heading">"I want to organize those files in my pull requests"</p>
        <AddExtensionBtn />
      </div>

      <div className="container">
        <div className="demo row">
          <div className="col-xs-12">
            <Safari>
              <img src="/images/demo-1.png" />
            </Safari>
          </div>
        </div>

        <div className="features row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-github"></i>
                </div>

                <h3>Just works on GitHub</h3>
                <p>
                  Simply turn on the Chrome extension and there will be a
                  'Slide deck' tab for all pull requests.
                </p>
              </div>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-th-large"></i>
                </div>

                <h3>Turn it into slide deck</h3>
                <p>
                  Slide deck is better than a wall of text.
                  It is easier to understand and quicker to review.
                </p>
              </div>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-lock"></i>
                </div>

                <h3>Your code is secure</h3>
                <p>
                  Vym never saves your code anywhere. Vym is open source for
                  full transparency.
                </p>
              </div>

            </div>
          </div>

          <div className="demo workflow row">
            <div className="col-xs-12">
              <h2>How does it work?</h2>

              <WorkflowCarousel />
            </div>
          </div>
        </div>

      </div>

      <PricingSection />
    </div>
  );
};

export default Home;
