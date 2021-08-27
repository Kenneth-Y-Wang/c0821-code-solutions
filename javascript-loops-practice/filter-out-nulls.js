/* exported filterOutNulls */
function filterOutNulls(values) {
  var result = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      result.push(values[i]);
    }
  }
  return result;
}
