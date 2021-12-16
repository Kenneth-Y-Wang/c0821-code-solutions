// /* exported swapChars */
// function swapChars(firstIndex, secondIndex, string) {
//   var result = ''; /* create the storage for result */
//   for (var i = 0; i < string.length; i++) { /* look at each character from the string, one at a time */
//     if (i === firstIndex) { /* once the character moves to the firstindex needs to be swapped */
//       result += string[secondIndex]; /* add the character that is located in the second index */
//     } else if (i === secondIndex) { /* once the character moves to the second index that needs to be swapped */
//       result += string[firstIndex]; /* add the character that is loacated in the first index that needs to be swapped */
//     } else {
//       result += string[i]; /* for all the other character, just add to the result storage */
//     }
//   }
//   return result; /* return the result storage */
// }

const swapChars = (firstIndex, secondIndex, string) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
};
