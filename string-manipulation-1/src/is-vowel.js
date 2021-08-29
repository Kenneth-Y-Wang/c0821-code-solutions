/* exported isVowel */
function isVowel(char) {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') { /* convert the word to lower case to compare with vowel letter a,e,i,o,u */
    return true;/* if it strictly equals,return true */
  } else {
    return false;/* for everything else, return false */
  }
}
