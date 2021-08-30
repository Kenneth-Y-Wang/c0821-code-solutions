/* exported getLastChar */
function getLastChar(string) {
  var lastCharacter = ''; /* create a storage-lastCharacter for output */
  var lastIndex = string.length - 1; /* in order to find the last character, first define the last index of the string */
  var lastCharOfString = string[lastIndex]; /* after define the last index of the string, then find the last character of each string */
  lastCharacter += lastCharOfString; /* the last character of each string will be added to the storage lastCharater */
  return lastCharacter; /* return the storage-lastCharacter as output */
}

/* more efficient version

function getLastChar(string) {
  return string[string.length-1];
}

end of function */
