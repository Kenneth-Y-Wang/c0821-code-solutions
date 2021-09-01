/* exported take */

// create a array storage for final outcome
// if the given count is larger then the array length, then the full array will be returned
// if the given count is smaller then the array length, then we look at each element from array, from index 0, to index count
// for each checked array element, push it to result
// return result
function take(array, count) {
  var result = [];
  if (count > array.length) {
    result = array;
    return result;
  }

  for (var i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}

/* faster version, using .slice without mutating the array.
function take(array, count) {
  var result=array.slice(0, count);
  return result;
}

*/
