import repos from './repos';
import pullRequests from './pull_requests';
import files from './files';
import slideDecks from './slide_decks';
import users from './users';

export default function () {
  repos();
  pullRequests();
  files();
  slideDecks();
  users();
}
