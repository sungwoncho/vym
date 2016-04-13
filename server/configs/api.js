import {Picker} from 'meteor/meteorhacks:picker';
import {SlideDecks} from '/lib/collections';

export function configureAPI() {
  Picker.route('/api/v1/slide_decks/:ownerName/:repoName/:prNumber', function (params, req, res) {
    var slideDeck = SlideDecks.findOne({
      ownerName: params.ownerName,
      repoName: params.repoName,
      prNumber: parseInt(params.prNumber, 10)
    });

    let response = JSON.stringify(slideDeck);
    res.end(response);
  });
}
