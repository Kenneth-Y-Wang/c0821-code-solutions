import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, ticking: false };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState(state => ({
      time: state.time + 1
    }));
  }

  play() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState(state => ({
      ticking: !state.ticking
    }));
  }

  pause() {
    clearInterval(this.timeID);
    this.setState(state => ({
      ticking: !state.ticking
    }));
  }

  reset() {

    clearInterval(this.timeID);
    this.setState({ time: 0 });
  }

  render() {
    const ticking = this.state.ticking;
    if (!ticking) {
      return (
      <div className="clock-display">
        <div className="clock" onClick={this.reset}>
          <h1>{this.state.time}</h1>
        </div>
        <div className="switch" onClick={this.play}><i className="fas fa-play"></i></div>
      </div>
      );
    } else {
      return (
      <div className="clock-display">
          <div className="clock" >
          <h1>{this.state.time}</h1>
        </div>
        <div className="switch" onClick={this.pause}><i className="fas fa-pause"></i></div>
      </div>
      );
    }
  }
}
