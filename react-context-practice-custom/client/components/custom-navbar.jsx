import React from 'react';
import AppContext from '../lib/app-context';

// export default class CustomDropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { isOpen: false };
//     // this.switch = this.switch.bind(this);
//   }

//   // switch() {
//   //   if (event.target.matches('a') === true || event.target.matches('.container') === true || event.target.matches('.fas') === true) {
//   //     this.setState(state => ({
//   //       isOpen: !state.isOpen
//   //     }));
//   //   }
//   // }
export default class CustomDropdown extends React.Component {
  render() {
    // const isOpen = this.state.isOpen;
    const { user, isOpen, handleSignOut } = this.context;
    const userButton = user !== null
      ? <a className="chat" onClick={handleSignOut}><i className="fas fa-sign-out-alt"></i></a>
      : <a href="sign-in" className="chat" ><i className="fas fa-user"></i></a>;
    return (
      <div className={!isOpen ? 'container' : 'container modal-on'} onClick={!isOpen ? null : () => this.props.switch()}>
        <header className="logo-container">
          <div onClick={() => this.props.switch()} className="switch"><i className="fas fa-bars"></i></div>
          <a href="#"><h1 className="logo">ThriveVox</h1></a>
          {userButton}
        </header>
        <div className={!isOpen ? 'menu' : ' menu menu-on'}>
          <h1>Menu</h1>
          <a>About Me</a>
          <a>What I like</a>
          <a>Are You There</a>
          <a>Let&apos;s Chat</a>
        </div>
      </div>
    );
  }
}

CustomDropdown.contextType = AppContext;
