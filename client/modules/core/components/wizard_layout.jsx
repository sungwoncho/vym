import React from 'react';

const WizardLayout = ({content = () => null }) => (
  <div>
    {content()}
  </div>
);

export default WizardLayout;
