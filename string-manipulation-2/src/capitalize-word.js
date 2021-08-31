/* exported capitalizeWord */
function capitalizeWord(word) {
  var result = word[0].toUpperCase(); /* we create the result string with the given string's first character in upper case form */

  if (word.toUpperCase() === 'JAVASCRIPT') { /* if the givin string is 'javascript' in any upper or lower case form */
    result += 'avaScript'; /* we add 'avaScript' to the result string, to form the 'JavaScript' */
    return result; /* return the result of this case */
  }
  for (var i = 1; i < word.length; i++) { /* in any other case, we look at each character after the first character from the given string */
    result += word.charAt(i).toLowerCase(); /* we add each character in lower case to the result string */
  }

  return result; /* return the result string */
}
