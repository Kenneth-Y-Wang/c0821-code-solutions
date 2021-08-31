/* exported ransomCase */
function ransomCase(string) {
  var result = ''; /* create the storage for result outcome */

  for (var i = 0; i < string.length; i += 2) { /* starting from the first character in the string, look at every other character */
    result += string.charAt(i).toLowerCase() + string.charAt(i + 1).toUpperCase(); /* add the checked index characther in its lower case form to the result storage, and next character in its upper case form to the result */
  }
  return result; /* return the result string */
}
