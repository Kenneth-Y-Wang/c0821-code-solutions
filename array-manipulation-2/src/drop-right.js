/* exported dropRight */
function dropRight(array, count) {
  var result = [];
  if (count > array.length) {
    result = [];
    return result;
  }
  for (var i = 0; i < (array.length - count); i++) {
    result[i] = array[i];
  }
  return result;
}

/* faster version by using .slice without mutating the array
function dropRight(array, count) {
  var result = array.slice(0, (array.length - count));
  return result;
}

*/
