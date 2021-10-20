
import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clickCount: state.clickCount + 1
    }));
  }

  render() {
    const clickCount = this.state.clickCount;
    if (clickCount >= 0 && clickCount < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCount >= 3 && clickCount < 6) {
      return <button onClick={this.handleClick} className="level-one">Hot Button</button>;
    } else if (clickCount >= 6 && clickCount < 9) {
      return <button onClick={this.handleClick} className="level-two">Hot Button</button>;
    } else if (clickCount >= 9 && clickCount < 12) {
      return <button onClick={this.handleClick} className="level-three">Hot Button</button>;
    } else if (clickCount >= 12 && clickCount < 15) {
      return <button onClick={this.handleClick} className="level-four">Hot Button</button>;
    } else if (clickCount >= 15 && clickCount < 18) {
      return <button onClick={this.handleClick} className="level-five">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="level-six">Hot Button</button>;
    }
  }
}
