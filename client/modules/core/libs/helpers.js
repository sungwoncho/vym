import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import _ from 'lodash';

export function pathFor(pathName, params) {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};

  return FlowRouter.path(pathName, params, query);
}

export function urlFor(pathName, params) {
  let path = pathFor(pathName, params);
  path = path.slice(1); // remove the leading '/'
  return Meteor.absoluteUrl(path);
}

// Used in Flow Router's triggersEnter
export function ensureLoggedIn(context, redirect) {
  if (!Meteor.userId()) {
    redirect('/');
  }
}

export function getAvatarUrl({githubHandle, size = 300}) {
  const baseUrl = 'https://avatars.githubusercontent.com';

  return `${baseUrl}/${githubHandle}?s=${size}`;
}

export function checkIfAdmin(user, repo) {
  if (repo.adminIds) {
    return _.includes(repo.adminIds, user._id);
  } else {
    return repo.permissions.admin;
  }
}
