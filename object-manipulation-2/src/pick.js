/* exported pick */
function pick(source, keys) {
  debugger;
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[keys[i]] !== undefined) {
        result[keys[i]] = source[key];
      }

    }

  }
  return result;
}

/*    if (keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
*/
