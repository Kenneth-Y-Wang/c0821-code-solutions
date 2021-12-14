/* exported capitalize */
// function capitalize(word) {
//   var result = word[0].toUpperCase(); /* create a string storage-result for output with the first character from word capitalized */
//   for (var i = 1; i < word.length; i++) { /* look at each character from the second character ,one at a time */
//     result += word.charAt(i).toLowerCase(); /* add each character in its lower case form to the result storage */
//   }
//   return result; /* return the result storage */
// }

/* version with slice

function capitalize(word) {
  var resultWord = '';
  var firstCharacter = word[0];
  var capFirstCha = firstCharacter.toUpperCase();
  var remainCha = word.slice(1);
  var remainChaLow = remainCha.toLowerCase();
  resultWord = capFirstCha + remainChaLow;
  return resultWord;
}
*/
/* create a storage-resultWord for output */
/* locate the first character of the word */
/* convert the first character to Capitalized */
/* get the remaining of the word from first character */
/* convert the remaining characters all to lower cases */
/* concatenate the first Cap character to the all lower case remaining  characters, and add it to the final output */
/* return the output */

/* super fast version

function capitalize(word) {
  return word[0].toUpperCase()+word.slice(1).toLowerCase();
}
*/

const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
