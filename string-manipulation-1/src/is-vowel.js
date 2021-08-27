/* exported isVowel */
function isVowel(char) {
  if (char.toLowerCase() === 'a') { /* convert the word to lower case to compare with vowel letter a */
    return true;/* if it strictly equals,return true */
  } else if (char.toLowerCase() === 'e') { /* convert the word to lower case to compare with vowel letter e */
    return true;/* if it strictly equals,return true */
  } else if (char.toLowerCase() === 'i') { /* convert the word to lower case to compare with vowel letter i */
    return true;/* if it strictly equals,return true */
  } else if (char.toLowerCase() === 'o') { /* convert the word to lower case to compare with vowel letter o */
    return true;/* if it strictly equals,return true */
  } else if (char.toLowerCase() === 'u') { /* convert the word to lower case to compare with vowel letter u */
    return true;/* if it strictly equals,return true */
  } else {
    return false;/* for everything else, return false */
  }
}
