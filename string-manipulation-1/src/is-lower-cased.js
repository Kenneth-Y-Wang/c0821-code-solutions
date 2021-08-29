/* exported isLowerCased */
function isLowerCased(word) {
  var storage = ''; /* create a storage to store the character */
  for (var i = 0; i < word.length; i++) { /* look at each character one by one */
    if (word[i] === word[i].toLowerCase()) { /* if any character is in its lower case form, then this character will be sent to the storage */
      storage += word[i];
    }
  }
  if (storage === word) { /* once the storage has all the lower case character from the word, compare to see if the storage word equals to the orginal word */
    return true; /* if yes, then return boolean true */
  } else {
    return false; /* in any other case, return false */
  }
}

/* faster version

function isLowerCased(word){
  if (word=== word.toLowerCase()) {
    return true;
  }
  return false;
}

*/
