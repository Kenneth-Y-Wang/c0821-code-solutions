/* exported getWords */
// function getWords(string) {
//   var result = []; /* create a storage for output */
//   var word = ''; /* create a storage for characters */
//   if (string.length === 0) { /* first of all, clear out the situation which the string is empty */
//     return []; /* if the string is empty, then the function return [] */
//   }
//   for (var i = 0; i < string.length; i++) { /* look at each character, one at a time */
//     if (string[i] === ' ') { /* if a space is reached, then push the current word to result, and clear the word storage */
//       result.push(word);
//       word = '';
//     } else { /* otherwise, add each character to the word container */
//       word += string[i];
//     }
//   }
//   result.push(word); /* add each word from word container to the result array */
//   return result; /* return the result array */
// }

/* faster version

  function getWords(string) {
    return string.split(" ");
  }
 */

const getWords = string => string === '' ? [] : string.split(' ');
