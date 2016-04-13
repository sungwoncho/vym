import React from 'react';
import SortableMixin from 'sortablejs/react-sortable-mixin';

import Section from '../containers/section';

const SectionList = React.createClass({
  mixins: [ SortableMixin ],

  sortableOptions: {
    model: 'sections',
    ref: 'preview',
    onEnd: 'handleSectionMove'
  },

  handleSectionMove(e) {
    const {slideDeck, currentSlideNum, reorderSection} = this.props;

    reorderSection(slideDeck._id, currentSlideNum, e.oldIndex, e.newIndex);
  },

  render() {
    const {sections, slideDeck, currentSlideNum} = this.props;

    return (
      <div className="preview" ref="preview">
        {
          sections.map((section, sectionIndex) => (
            <Section section={section}
              sectionIndex={sectionIndex}
              slideDeck={slideDeck}
              currentSlideNum={currentSlideNum} />
          ))
        }
      </div>
    );
  }
});

export default SectionList;
