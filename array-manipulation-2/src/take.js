/* exported take */
function take(array, count) {
  var result = [];
  if (count > array.length) {
    result = array;
    return result;
  }

  for (var i = 0; i < count; i++) {
    result[i] = array[i];
  }
  return result;
}

/* faster version, using .slice without mutating the array.
function take(array, count) {
  var result=array.slice(0, count);
  return result;
}

*/
