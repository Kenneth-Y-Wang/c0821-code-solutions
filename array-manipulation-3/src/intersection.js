// /* exported intersection */

// // create a final array for result
// // loop through each element from first array
// // for each element from first array, do a nested loop for each element in second array
// // if any element is strictly equal to the element in second array, then push the element to final array
// // return the final array

// function intersection(first, second) {
//   var final = [];
//   for (var i = 0; i < first.length; i++) {
//     for (var j = 0; j < second.length; j++) {
//       if (first[i] === second[j]) {
//         final.push(first[i]);
//       }
//     }
//   }
//   return final;
// }

const intersection = (first, second) => {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        result.push(first[i]);
      }
    }
  }
  return result;
};
