import ReactDOM from 'react-dom';
import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  switch() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <div className="drawer-holder">
        <div className="switch-button"><i className="fas fa-bars"></i></div>
        <div className="drawer">
          <h1>Menu</h1>
          <a>About</a>
          <a>Find a Band</a>
          <a>Want to Chat</a>
          <a>What do You Like</a>
        </div>
      </div>
    );
  }
}
