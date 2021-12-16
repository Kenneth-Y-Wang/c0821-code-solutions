// /* exported dropRight */

// // create a array storage for final outcome
// // if the given count is larger then the array length, then the empty array will be returned
// // if the given count is smaller then the array length, then we look at each element from array, from index 0, to index (length-count)
// // for each checked array element, push it to result
// // return result

// function dropRight(array, count) {
//   var result = [];
//   if (count > array.length) {
//     result = [];
//     return result;
//   }
//   for (var i = 0; i < (array.length - count); i++) {
//     result.push(array[i]);
//   }
//   return result;
// }

// /* faster version by using .slice without mutating the array
// function dropRight(array, count) {
//   var result = array.slice(0, (array.length - count));
//   return result;
// }

// */

const dropRight = (array, count) => {
  let result = [];
  if (count > array.length) {
    result = [];
  } else {
    for (let i = 0; i < array.length - count; i++) {
      result.push(array[i]);
    }
  }
  return result;
};
