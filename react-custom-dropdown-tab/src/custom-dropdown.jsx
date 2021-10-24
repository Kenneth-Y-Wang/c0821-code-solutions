import React from 'react';

export default class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.switch = this.switch.bind(this);
  }

  switch() {
    if (event.target.matches('a') === true || event.target.matches('.container') === true || event.target.matches('.fas') === true) {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <div className={!isOpen ? 'container' : 'container modal-on'} onClick={!isOpen ? null : this.switch}>
        <header className="logo-container">
          <h1 className="logo">ThriveVox</h1>
        </header>
        <div onClick={this.switch} className="switch"><i className="fas fa-bars"></i></div>
        <div className={!isOpen ? 'menu' : ' menu menu-on'}>
          <a>About Me</a>
          <a>What I like</a>
          <a>Are You There</a>
          <a>Let&apos;s Chat</a>
        </div>
      </div>
    );
  }
}
