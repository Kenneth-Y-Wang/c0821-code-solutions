// /* exported isPalindromic */

// // first, create an empty string to store the parameter string without the space
// // loop through each letter in the parameter string, and add every letter to the empty string without the space
// // after we get the first string, then we create another empty string for checking if the string is palindormic
// // loop through each letter in the first string from the back, and add each letter to the middle string
// // after the middle string is being concatenated, compare if the first string and middle string are strictly equal
// // if yes, then return true, if not ,then return false

// function isPalindromic(string) {
//   var first = '';
//   var middle = '';
//   for (var j = 0; j < string.length; j++) {
//     if (string[j] !== ' ') {
//       first += string[j];
//     }
//   }

//   for (var i = first.length - 1; i > -1; i--) {
//     middle += first[i];
//   }

//   if (middle === first) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isPalindromic = string => {
  const newString = string.replace(' ', '');
  let reverse = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverse += newString[i];
  }

  return reverse === newString;
};
