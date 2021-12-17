// /* exported pick */

// // create a storage empty object for final result
// // look at each element in keys Array, one at a Time;
// // meantime, for each element in keys array being checked, check each property in source object;
// // if the element in keys array has the same value as the property in source, and that property has a value which is not undefined in source object,
// // then add that property with its paired value from source to the result object
// // finally, return the result object
// function pick(source, keys) {

//   var result = {};

//   for (var i = 0; i < keys.length; i++) {

//     if (source[keys[i]] !== undefined) {
//       result[keys[i]] = source[keys[i]];
//     }

//   }

//   return result;
// }

const pick = (source, keys) => {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
};
