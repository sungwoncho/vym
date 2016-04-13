import React from 'react';

class ReorderAction extends React.Component {
  constructor(props) {
    super(props);
  }

  onReorder() {
    const {reorderSlide, slideDeck, currentSlideNum} = this.props;
    let targetSlideNumber = parseInt(this.refs.slideDestination.value, 10);

    reorderSlide(slideDeck._id, currentSlideNum, targetSlideNumber);
    this.refs.slideDestination.value = '';
  }

  render() {
    return (
      <div>
        <input type="number" ref="slideDestination" />
        <button className="btn btn-sm btn-secondary" onClick={this.onReorder.bind(this)}>
          move slide
        </button>
      </div>
    );
  }
}

export default ReorderAction;
