import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement(
  'h1',
  [null],
  'Hello, React!'
);

ReactDOM.render(reactElement, document.querySelector('#root'));

// console.log(reactElement);
