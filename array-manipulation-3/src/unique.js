// /* exported unique */
// // create a result array
// // for each element in array, check one by one
// // if the result array does not contain the element, then push the element to result array
// // result array will only contain each element ONCE
// // return result array

// function unique(array) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (result.indexOf(array[i]) === -1) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

const unique = array => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
