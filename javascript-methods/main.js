var a = 10;
var b = 20;
var c = 30;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Ironman', 'Dr.Stange', 'Hulk'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  { title: 'Sick in the Head', author: 'Judd Apatow' },
  { title: 'Notes from a Small Island', author: 'Bill Bryson' },
  { title: 'Dad IS Fat', author: 'Jim Gaffigan' }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Kenneth Wang';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
