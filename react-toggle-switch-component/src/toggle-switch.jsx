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
    if (isClicked) {
      return (
     <div className="row">
        <div className="switch-back back-on">
          <div onClick={this.handleClick} className="switch switch-on"></div>
        </div>
        <h1>ON</h1>
     </div>
      );
    } else {
      return (
        <div className="row">
          <div className="switch-back back-off">
            <div onClick={this.handleClick} className="switch switch-off"></div>
          </div>
          <h1>OFF</h1>
        </div>
      );
    }
  }
}
