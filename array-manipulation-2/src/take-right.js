/* exported takeRight */

// create a array storage for final outcome
// if the given count is larger then the array length, then the full array will be returned
// if the given count is smaller then the array length, then we look at each element from array, from the count spot from the end, to the end of array
// for each checked array element, push it to result
// return result

function takeRight(array, count) {
  var result = [];
  if (count > array.length) {
    result = array;
    return result;
  }
  for (var i = (array.length - count); i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

/* faster verison with .slice without mutating the aray
function takeRight(array, count) {
  var result = array.slice((array.length - count), array.length);
  return result;
}

*/
