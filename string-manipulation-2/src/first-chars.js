/* exported firstChars */
function firstChars(length, string) {
  var result = ''; /* create the storage for result outcome */
  if (length > string.length) { /* if the given length is larger than the string length */
    for (var j = 0; j < string.length; j++) { /* then every character of the string will be added to the result string */
      result += string[j];
    }
    return result; /* return the result string for this condition */
  }
  for (var i = 0; i < length; i++) { /* if the given length is smaller than the string length, then starting from the first spot, we start to check each character of the string,until the given length spot */

    result += string[i]; /* add each character from first spot up to the length number spot of the string to the result string */
  }
  return result; /* return the result string */
}
