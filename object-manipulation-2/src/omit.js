/* exported omit */

// create a result empty object for final outcome
// for the source object, check each property, one at a time
// by using the indexOf method, by checking if the source property has an index # in keys array, if the value returning is -1, means NOT in the keys array
// then add the property and its paired value from source to the result object
// return the result object as final result

function omit(source, keys) {

  var result = {};

  for (var key in source) {
    if (keys.indexOf(key) === -1) {
      result[key] = source[key];
    }

  }
  return result;
}
