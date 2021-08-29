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
