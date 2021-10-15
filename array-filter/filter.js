const allnames = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function filter(array, predicate) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function getName(name) {
  if (name.startsWith('E') === true) {
    return name;
  } else {
    return false;
  }

}

const name = filter(allnames, getName);

console.log(name);
