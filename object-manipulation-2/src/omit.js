/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        result[key] = source[key];
      }

    }

  }
  return result;
}
