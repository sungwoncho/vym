import publications from './publications';
import methods from './methods';
import {configureGithubOauth} from './configs/oauth';
import {configureAPI} from './configs/api';
import {configureUserHook} from './configs/users';

publications();
methods();
configureGithubOauth();
configureAPI();
configureUserHook();
