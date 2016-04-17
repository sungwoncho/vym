import React from 'react';
import Slider from 'react-slick';
import Safari from './safari.jsx';
import classnames from 'classnames';

class WorkflowCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slickGoTo: 0};
  }

  componentDidMount() {
    let getNextSlideIndex = () => {
      if (this.state.slickGoTo === 2) {
        return 0;
      } else {
        return this.state.slickGoTo + 1;
      }
    };

    setInterval(() => {
      this.setState({slickGoTo: getNextSlideIndex()});
    }, 6500);
  }

  goToSlide(slideIndex, e) {
    e.preventDefault();
    this.setState({slickGoTo: slideIndex});
  }

  render() {
    let settings = {
      dots: false,
      draggable: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: this.state.slickGoTo
    };

    let getStepKlass = (stepIndex) => {
      return classnames('btn btn-circle', {
        'btn-info': this.state.slickGoTo === stepIndex,
        'btn-secondary': this.state.slickGoTo !== stepIndex
      });
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <Safari>
              <img className="demo-img" src="/images/demo-3.png" />
            </Safari>
          </div>
          <div>
            <Safari>
              <img className="demo-img" src="/images/demo-2.png" />
            </Safari>
          </div>
          <div>
            <Safari>
              <img className="demo-img" src="/images/demo-1.png" />
            </Safari>
          </div>
        </Slider>

        <div className="stepwizard">
          <div className="stepwizard-row">
            <div className="stepwizard-step">
              <a href="#step-1"
                type="button"
                className={getStepKlass(0)}
                onClick={this.goToSlide.bind(this, 0)}>1</a>
              <p>Submit a PR</p>
            </div>
            <div className="stepwizard-step">
              <a href="#step-2"
                type="button"
                className={getStepKlass(1)}
                onClick={this.goToSlide.bind(this, 1)}>2</a>
              <p>Create a slide deck</p>
            </div>
            <div className="stepwizard-step">
              <a href="#step-3"
                type="button"
                className={getStepKlass(2)}
                onClick={this.goToSlide.bind(this, 2)}>3</a>
              <p>Review</p>
            </div>
          </div>
        </div>

        <div className="commentary">
          {
            this.state.slickGoTo === 0 ?
            <p>Yay, new feature! Open a pull request for review.</p> : this.state.slickGoTo === 1 ?
            <p>Create a slide deck using the Vym slide wizard</p> : <p>Your teammates can view the slide deck without leaving GitHub</p>
          }
        </div>
      </div>
    );
  }
}

export default WorkflowCarousel;
