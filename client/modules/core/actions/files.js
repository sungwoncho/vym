export default {
  getFiles({Meteor, Collections}, ownerName, repoName, prNumber, slideDeck) {
    Meteor.call('files.getAll', ownerName, repoName, prNumber, function (err, files) {
      files.forEach(function (file) {
        file.vym = {}; // a property to hold all custom key-val pair
        Collections.Files.insert(file); // Save to local collection
      });

      // Update file information
      slideDeck.slides.forEach(slide => {
        slide.sections.forEach((section, sectionIndex) => {
          if (section.type === 'file') {
            Collections.Files.update({filename: section.filename}, {
              $set: {
                'vym.slideNumber': slide.number,
                'vym.sectionIndex': sectionIndex
              }
            });
          }
        });
      });

    });
  },

  clearFiles({Collections}) {
    Collections.Files.remove({});
  }
};
