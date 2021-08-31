/* exported truncate */
function truncate(length, string) {
  var letterStorage = ''; /* we create a storage to store the character without ... */
  var result = ''; /* we also create a storage for final result string */
  if (length > string.length) { /* if the given length is larger then the string length */
    letterStorage = letterStorage + string; /* we add every letter from string to the letterstorage */
    result = letterStorage + '...'; /* then we concatenate the letterstorage to the '...', and the result will be added to the result string */
    return result; /* return the result string */
  }
  for (var i = 0; i < length; i++) { /* for all the other case, we look at each character of string from first spot to the given length spot */
    letterStorage += string[i]; /* we add each character to the letterstorage */
  }
  result = letterStorage + '...'; /* after all characters are in the letterstorage, then we concatenate the letterstorage to the '...', and the result will be added to the result string */
  return result; /* return result stroage */
}
