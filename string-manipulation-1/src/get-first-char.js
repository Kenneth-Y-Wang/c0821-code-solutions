/* exported getFirstChar */
function getFirstChar(string) {
  var firstCharacter = ''; /* create a storage for output */
  firstCharacter += string[0]; /* the first character of each string will be added to the storage firstCharater */
  return firstCharacter; /* return the storage-firstCharacter as output */
}

/* more efficient version

function getFirstChar(string) {
  return string[0];
}

end of function */
