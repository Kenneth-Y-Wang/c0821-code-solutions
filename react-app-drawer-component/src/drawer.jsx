
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

    return (
        <div className={!isOpen ? 'drawer-holder' : 'drawer-holder holder-on'} onClick={!isOpen ? null : this.switch}>
        <div className="switch-button" onClick={!isOpen ? this.switch : null}><i className="fas fa-bars"></i></div>
          <div className={!isOpen ? 'drawer' : 'drawer drawer-on'} >
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
