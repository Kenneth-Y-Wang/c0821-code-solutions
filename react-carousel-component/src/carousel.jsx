import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  autoRun() {
    this.setState(state => ({
      index: state.index + 1
    }));
    if (this.state.index === this.props.pics.length + 1) {
      this.setState({ index: 1 });
    }

  }

  rightClick() {
    this.setState(state => ({
      index: state.index + 1
    }));
    if (this.state.index === this.props.pics.length) {
      this.setState({ index: 1 });
    }
    clearInterval(this.timeID);
    this.timeID = setInterval(
      () => this.autoRun(),
      3000
    );

  }

  leftClick() {
    this.setState(state => ({
      index: state.index - 1
    }));
    if (this.state.index === 1) {
      this.setState({ index: this.props.pics.length });
    }
    clearInterval(this.timeID);
    this.timeID = setInterval(
      () => this.autoRun(),
      3000
    );
  }

  dotClick() {
    this.setState({ index: Number(event.target.name) });
    clearInterval(this.timeID);
    this.timeID = setInterval(
      () => this.autoRun(),
      3000
    );

  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.autoRun(),
      3000
    );

  }

  render() {
    const pics = this.props.pics;
    const listPics = pics.map(pic =>
    <img src={pic.url} key={pic.id} className={pic.id === this.state.index ? '' : 'hidden'} />

    );

    const listButtons = pics.map(pic =>
      <button onClick={this.dotClick} className={pic.id === this.state.index ? 'dot dot-select' : 'dot'} name={pic.id} key={pic.id}></button>
    );
    return (
      <div className="carousel-container">
        <div className=" arrow-holder column-one-fifth">
          <i onClick={this.leftClick} className="far fa-caret-square-left font-style transition"></i>
        </div>
        <div className=" column-three-fifth pic-column">
          <div className="pic-holder">
            {listPics}
          </div>
          <div className="dot-holder">
            {listButtons}
          </div>
        </div>
        <div className=" arrow-holder column-one-fifth">
          <i onClick={this.rightClick} className="far fa-caret-square-right font-style transition"></i>
        </div>
      </div>
    );
  }
}
