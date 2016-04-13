import publications from './publications';
import methods from './methods';
import {configureGithubOauth} from './configs/oauth';
import {configureAPI} from './configs/api';

publications();
methods();
configureGithubOauth();
configureAPI();
