/* exported omit */

// first define a 'middle' object which has the same elements as the source objects
// also define a result Storage
// look at each elements in keys array, no matter if the element is in 'middle' objects as a key or not, assign the middle object's property as keys[i] with a value of null
// after the middle object is reformed, for each key in middle object
// if the value of the checked property is not null
// then assign the property and value to the final result object
// return the final result object
function omit(source, keys) {
  debugger;
  var middle = source;
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    middle[keys[i]] = null;
  }

  for (var pro in middle) {
    if (middle[pro] !== null) {
      result[pro] = middle[pro];
    }
  }
  return result;
}

//   for (var key in source) {
//     for (var i = 0; i < keys.length; i++) {
//       if (key !== keys[i] && source[key[i]] === undefined) {
//         result[key] = source[key];
//       }
//     }
//   }
//   return result;
// }

//   for (var key in source) {
//     if (keys.indexOf(key) === -1) {
//       result[key] = source[key];
//     }

//   }
//   return result;
// }
