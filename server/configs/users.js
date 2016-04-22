import {Accounts} from 'meteor/accounts-base';
import hat from 'hat';

export function configureUserHook() {
  Accounts.onCreateUser(function (options, user) {
    user.vymToken = hat();
    return user;
  });
}
