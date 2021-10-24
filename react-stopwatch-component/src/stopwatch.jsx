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
    if (!this.state.ticking) {
      clearInterval(this.timeID);
      this.setState({ time: 0 });
    }
  }

  render() {
    const ticking = this.state.ticking;

    return (
      <div className="clock-display">
        <div className="clock" onClick={this.reset}>
          <h1>{this.state.time}</h1>
        </div>
          <div className="switch" onClick={!ticking ? this.play : this.pause}><i className={!ticking ? 'fas fa-play' : 'fas fa-pause'}></i></div>
      </div>
    );

  }
}
