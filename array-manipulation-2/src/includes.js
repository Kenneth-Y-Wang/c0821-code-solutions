// /* exported includes */

// // check each element from array, one by one
// // if any element strictly equals to the value
// // then the boolean true is returned
// // if not, then the boolean false is returned

// function includes(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

const includes = (array, value) => {
  const index = array.indexOf(value);
  return index !== -1;
};
