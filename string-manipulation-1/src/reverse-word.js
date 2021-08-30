/* exported reverseWord */
function reverseWord(word) {
  var result = ''; /* create a storage for the result */
  for (var i = (word.length - 1); i >= 0; i--) { /* for each character from the word, but counting from the back side */
    result += word[i]; /* add each character to the output string */

  }
  return result; /* once each character is added, return the output string */
}
