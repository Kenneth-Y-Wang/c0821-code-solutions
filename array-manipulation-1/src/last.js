// /* exported last */
// /* look at each index of array, one a time */
// /* if the index i is strictly equaling to the last index of array */
// /* then return the element at the last index of the array */

// /* function last(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (i === (array.length - 1)) {
//       return array[i];
//   }
// }
// */

// function last(array) {
//   return array[(array.length) - 1];
// }

const last = array => array[array.length - 1];
