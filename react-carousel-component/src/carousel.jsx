import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
  }

  render() {

    return (
      <div className="carousel-container">
        <div className=" arrow-holder column-one-fifth">
          <i className="far fa-caret-square-left font-style"></i>
        </div>
        <div className=" column-three-fifth pic-column">
          <div className="pic-holder">
            <img src="https://cdn.mos.cms.futurecdn.net/G8tpf6HYLdXLxLHMKK3G-1200-80.jpg" />
          </div>
          <div className="dot-holder">
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
          </div>
        </div>
        <div className=" arrow-holder column-one-fifth">
          <i className="far fa-caret-square-right font-style"></i>
        </div>
      </div>
    );
  }
}
