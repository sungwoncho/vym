import React from 'react';

import PricingSection from './pricing_section.jsx';
import AddExtensionBtn from './add_extension_btn.jsx';
import Safari from './safari.jsx';
import WorkflowCarousel from './workflow_carousel.jsx';

const Home = ({githubAuth}) => {
  return (
    <div>
      <div className="hero">
        <h2 className="heading">Slide decks for your GitHub PR</h2>
        <p className="sub-heading">"I want to organize those files in my pull requests"</p>
        <AddExtensionBtn />
      </div>

      <div className="container">
        <div className="demo home-section row">
          <div className="col-xs-12 demo-content">
            <Safari>
              <img src="/images/demo-1.png" />
            </Safari>
            <h4>Vym adds a slide deck tab to GitHub PRs.</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid features-container">
        <div className="features row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">

              <h2 className="text-xs-center mb50">Why should I care?</h2>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-clock-o"></i>
                </div>

                <h3>Quicker, better review</h3>
                <p>
                  Slide deck is better than a wall of text.
                  It is easier to understand and quicker to review.
                </p>
              </div>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-bug"></i>
                </div>

                <h3>Prevent bugs</h3>
                <p>
                  Better code review results in less bug and technical debt.
                </p>
              </div>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-github"></i>
                </div>

                <h3>Just works on GitHub</h3>
                <p>
                  Simply turn on the Chrome extension and slide decks are there
                  on GitHub.
                </p>
              </div>

              <div className="col-xs-12 feature">
                <div className="feature-icon">
                  <i className="fa fa-lock"></i>
                </div>

                <h3>Your code is secure</h3>
                <p>
                  Vym never saves your code. Everything is open source for
                  full transparency.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="workflow home-section row">
          <div className="col-xs-12">
            <h2>
              Submit a pull request, make a slide deck,<br/>
              get it reviewed using Vym.
            </h2>

            <WorkflowCarousel />
          </div>
        </div>
      </div>

      <PricingSection />
    </div>
  );
};

export default Home;
