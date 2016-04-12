import publications from './publications';
import methods from './methods';
import {configureGithubOauth} from './configs/oauth';

publications();
methods();
configureGithubOauth();
