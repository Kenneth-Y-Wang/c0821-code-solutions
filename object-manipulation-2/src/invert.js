/* exported invert */
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;

  }
  return result;
}
