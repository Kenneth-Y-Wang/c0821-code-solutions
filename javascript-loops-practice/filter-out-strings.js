/* exported filterOutStrings */
function filterOutStrings(values) {
  var result = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      result.push(values[i]);
    }
  }
  return result;
}
