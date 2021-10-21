import ReactDOM from 'react-dom';
import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.switch = this.switch.bind(this);
  }

  switch() {
    if (event.target.matches('a') === true || event.target.matches('.drawer-holder') === true || event.target.matches('.fas') === true) {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }

  }

  render() {
    const isOpen = this.state.isOpen;
    if (!isOpen) {
      return (
      <div className="drawer-holder">
        <div className="switch-button" onClick={this.switch}><i className="fas fa-bars"></i></div>
        <div className="drawer">
          <h1>Menu</h1>
          <a>About</a>
          <a>Find a Band</a>
          <a>Want to Chat</a>
          <a>What do You Like</a>
        </div>
      </div>
      );
    } else {
      return (
        <div className="drawer-holder holder-on" onClick={this.switch}>
          <div className="switch-button" ><i className="fas fa-bars"></i></div>
          <div className="drawer drawer-on">
            <h1 >Menu</h1>
            <a >About</a>
            <a >Find a Band</a>
            <a >Want to Chat</a>
            <a >What do You Like</a>
          </div>
        </div>
      );
    }
  }
}
