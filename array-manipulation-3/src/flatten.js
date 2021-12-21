// /* exported flatten */

// // create an array for final result
// // check each element in array
// // if any element is array, then loop each element inside that array element
// // push each element from that inside nest
// // if any element is not array from the first layer, then push that element to final result array
// // return the final array

// function flatten(array) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i]) === true) {
//       for (var j = 0; j < array[i].length; j++) {
//         result.push(array[i][j]);
//       }
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

const flatten = array => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
