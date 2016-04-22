import React from 'react';

import {checkIfAdmin} from '/client/modules/core/libs/helpers';

const ActivateButton = ({
  currentUser, repo, activateRepo, stripePublishableKey, createOrUpdateSubscription
}) => {
  function onActivate(e) {
    e.preventDefault();

    if (repo.private) {
      // StripeCheckout is available by external script. Check <head>.
      let checkoutHandler = StripeCheckout.configure({
        key: stripePublishableKey,
        locale: 'auto',
        token(token) {
          createOrUpdateSubscription(token, function (err) {
            if (err) {
              return console.log(err);
            }

            activateRepo(repo);
          });
        }
      });

      checkoutHandler.open({
        name: 'Private repo',
        amount: 1200,
        currency: 'usd',
        panelLabel: '{{amount}} per month'
      });

    } else {
      activateRepo(repo);
    }
  }

  if (checkIfAdmin(currentUser, repo)) {
    return (
      <a href="#" onClick={onActivate.bind(this)} className="btn btn-sm btn-secondary">
        <i className="fa fa-plus-circle"></i> Activate
      </a>
    );
  } else {
    return (
      <span>Only repo owner can activate</span>
    );
  }
};

export default ActivateButton;
