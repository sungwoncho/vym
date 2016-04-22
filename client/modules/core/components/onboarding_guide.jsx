import React from 'react';

const OnboardingGuide = () => (
  <div className="onboarding-guide">
    <div className="row">
      <div className="col-xs-12 col-sm-4">
        <h2 className="step-title">
          1. Activate repo
        </h2>
        <p>
          Activate your repo on Vym to start using slide decks for the repo.
        </p>
      </div>
      <div className="col-xs-12 col-sm-4">
        <h2 className="step-title">
          2. Add slide deck
        </h2>
        <p>
          Add your first slide deck for an open pull request.
        </p>
      </div>
      <div className="col-xs-12 col-sm-4">
        <h2 className="step-title">
          3. Invite teammates
        </h2>
        <p>
          Invite your teammates so that they can start reviewing the slide deck
          you created.
        </p>
      </div>
    </div>
  </div>
);

export default OnboardingGuide;
