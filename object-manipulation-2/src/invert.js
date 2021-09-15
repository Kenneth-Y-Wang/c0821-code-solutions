/* exported invert */

// create a result empty object for final result
// check each property from source object, one at a time
// since the goal for the function is to swap the property with value, so we add the property value as new property, and the orginal property as new value, to the final object
// return the final object as the final result

function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;

  }
  return result;
}
