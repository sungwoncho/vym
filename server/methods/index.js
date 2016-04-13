import repos from './repos';
import pullRequests from './pull_requests';
import files from './files';
import slideDecks from './slide_decks';

export default function () {
  repos();
  pullRequests();
  files();
  slideDecks();
}
