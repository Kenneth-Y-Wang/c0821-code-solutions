function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result is:', seconds);

function greet(name) {
  var result = 'Hey, ' + name;
  return result;
}

var greeting = greet('Beavis');
console.log('greet result is:', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);
console.log('getArea result is:', area);

function getFirstName(person) {
  return person.firstName;
}

var firstname = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName result is:', firstname);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastelement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement result is:', lastelement);
