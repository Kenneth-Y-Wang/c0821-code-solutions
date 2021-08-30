/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  if (count > array.length) {
    result = array;
    return result;
  }
  for (var i = (array.length - count); i < array.length; i++) {
    result[i - (array.length - count)] = array[i];
  }
  return result;
}

/* faster verison with .slice without mutating the aray
function takeRight(array, count) {
  var result = array.slice((array.length - count), array.length);
  return result;
}

*/
