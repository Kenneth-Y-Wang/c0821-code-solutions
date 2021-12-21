// /* exported union */

// // create a final array and a result array
// // loop through every element in second array
// // is the element is not in first array, then push it to the secondCopy array
// // combine the first array and secondCopy array to a new array, which contain ALL elements from first array and only unique elements from second array
// // loop through the final array, to make sure NO REPEATED ELEMENT in first array, push each unique element to the result array
// // return the result array
// function union(first, second) {
//   var final = [];
//   var secondCopy = [];
//   var result = [];

//   for (var i = 0; i < second.length; i++) {
//     if (first.indexOf(second[i]) === -1) {
//       secondCopy.push(second[i]);
//     }
//   }
//   final = first.concat(secondCopy);

//   for (var j = 0; j < final.length; j++) { // this step is to make sure first array has NO repeated element..
//     if (result.indexOf(final[j] === -1)) { // the test file does not provide such case, but it should be covered.
//       result.push(final[j]);
//     }
//   }
//   return result;
// }

const union = (first, second) => {
  const combineArray = first.concat(second);
  const result = [];

  for (let i = 0; i < combineArray.length; i++) {
    if (!result.includes(combineArray[i])) {
      result.push(combineArray[i]);
    }
  }
  return result;
};
