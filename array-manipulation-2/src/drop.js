/* exported drop */

// create a array storage for final outcome
// if the given count is larger then the array length, then the empty array will be returned
// if the given count is smaller then the array length, then we look at each element from array, from index count, to the last element
// for each checked array element, push it to result
// return result

function drop(array, count) {
  var result = [];
  if (count > array.length) {
    result = [];
    return result;
  }
  for (var i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

/* faster version with .slice without mutating the array

function drop(array, count) {
  var result = array.slice(count, array.length);
  return result;
}

*/
