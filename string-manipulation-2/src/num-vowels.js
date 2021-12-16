// /* exported numVowels */
// function numVowels(string) {
//   var chaVow = ''; /* create a storage to collect the vowel character in the string */

//   for (var i = 0; i < string.length; i++) { /* look at each character in the given string */
//     if (string.charAt(i).toLowerCase() === 'a' || string.charAt(i).toLowerCase() === 'e' || string.charAt(i).toLowerCase() === 'i' || string.charAt(i).toLowerCase() === 'o' || string.charAt(i).toLowerCase() === 'u') { /* if any character, no matter in upper or lower case, is vowel character, then it will be added to the storage string */
//       chaVow += string.charAt(i);
//     }
//   }
//   var numVow = chaVow.length; /* by checking the length of the storage string, we can find out the total number of vowel character from the given string */
//   return numVow; /* return the result number */

// }

const numVowels = string => {
  let charVow = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() === 'a' || string.charAt(i).toLowerCase() === 'e' || string.charAt(i).toLowerCase() === 'i' || string.charAt(i).toLowerCase() === 'o' || string.charAt(i).toLowerCase() === 'u') {
      charVow += string[i];
    }
  }
  return charVow.length;
};
