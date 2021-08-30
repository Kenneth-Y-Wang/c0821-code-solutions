/* exported drop */
function drop(array, count) {
  var result = [];
  if (count > array.length) {
    result = [];
    return result;
  }
  for (var i = count; i < array.length; i++) {
    result[i - count] = array[i];
  }
  return result;
}

/* faster version with .slice without mutating the array

function drop(array, count) {
  var result = array.slice(count, array.length);
  return result;
}

*/
