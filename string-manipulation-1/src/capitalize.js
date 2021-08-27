/* exported capitalize */
function capitalize(word) {
  var result = ''; /* create a string storage-result for output */
  for (var i = 0; i < word.length; i++) { /* look at each character ,one at a time */
    if (i === 0) { /* identify the first character in the word */
      result += word[i].toUpperCase(); /* make that Character upper case, add it to the result storage */
    } else if (i > 0) { /* for rest of the characters in the word, make them all lower case and add them to the storage */
      result += word[i].toLowerCase();
    }
  }
  return result; /* return the result storage */
}

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
