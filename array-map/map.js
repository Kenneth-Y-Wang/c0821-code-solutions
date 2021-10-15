function map(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}

const AllNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const double = x => {
  return x * 2;
};

console.log('The result is:', map(AllNumbers, double));
