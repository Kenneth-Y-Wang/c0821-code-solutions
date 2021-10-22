import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pics = [
  {
    id: 1,
    url: 'https://cdn.mos.cms.futurecdn.net/G8tpf6HYLdXLxLHMKK3G-1200-80.jpg'
  },

  {
    id: 2,
    url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/final-fantasy-16-versus-13.jpg'
  },

  {
    id: 3,
    url: 'https://www.videogameschronicle.com/files/2020/10/Final-Fantasy-XVI-d-scaled.jpg'
  }
];

ReactDOM.render(
  <Carousel pics={pics} />,
  document.querySelector('#root')
);
