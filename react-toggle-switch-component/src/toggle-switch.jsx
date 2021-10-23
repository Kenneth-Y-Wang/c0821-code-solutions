import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    const isClicked = this.state.isClicked;

    return (
     <div className="row">
        <div className={isClicked ? 'switch-back back-on' : 'switch-back back-off'}>
          <div onClick={this.handleClick} className={isClicked ? 'switch switch-on' : 'switch switch-off'}></div>
        </div>
        <h1>{isClicked ? 'ON' : 'OFF'}</h1>
     </div>
    );
  }
}
