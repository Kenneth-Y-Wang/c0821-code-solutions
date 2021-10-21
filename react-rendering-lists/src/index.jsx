import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokedexList(props) {
  const names = props.names;
  const listItems = names.map(name =>
    <li key={ name.number.toString()}>
      {name.name}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <PokedexList names={pokedex} />,
  document.querySelector('#root')
);
