import React from 'react';

const AddRepoListItem = ({
  repo, activateRepo, stripePublishableKey, createOrUpdateSubscription
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

  function getRepoUrl(repo) {
    return `https://github.com/${repo.owner.login}/${repo.name}`;
  }

  return (
    <li className="repo-item">
      <div className="pull-xs-left">
        <span className="octicon octicon-repo mr10"></span>
        <div className="pull-xs-right mr10">{repo.owner.login}/{repo.name}</div>
        {
          repo.private ? <span className="label label-warning mr10">private</span> :
          <span></span>
        }
        {
          repo.fork ? <span className="label label-default mr10">fork</span> :
          <span></span>
        }
      </div>
      <div className="pull-xs-right">
        <a href="#" onClick={onActivate.bind(this)} className="btn btn-sm btn-secondary">
          <i className="fa fa-check"></i> Activate
        </a>
        <a href={getRepoUrl(repo)} target="_blank" className="btn btn-sm btn-secondary">
          <i className="fa fa-github"></i> Repo
        </a>
      </div>
    </li>
  );
};

export default AddRepoListItem;
