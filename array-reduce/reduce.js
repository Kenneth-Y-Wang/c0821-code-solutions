function reduce(array, reducer, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
}

function Sum(numP, numC) {
  return numP + numC;

}

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(reduce(allNumbers, Sum, 0));
