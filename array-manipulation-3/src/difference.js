// /* exported difference */

// // create a final array for outcome
// // loop through every element from first array
// // if any element is NOT in second array, then push it to final array
// // after first array is check, then loop through second array element, one by one
// // if any element is NOT in first array, then push it to the final array
// // return the final array

// function difference(first, second) {
//   var final = [];

//   for (var i = 0; i < first.length; i++) {
//     if (second.indexOf(first[i]) === -1) {
//       final.push(first[i]);
//     }
//   }

//   for (var j = 0; j < second.length; j++) {
//     if (first.indexOf(second[j]) === -1) {
//       final.push(second[j]);
//     }
//   }

//   return final;
// }

const difference = (first, second) => {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return result;
};
