// /* exported lastChars */
// function lastChars(length, string) {
//   var result = ''; /* create the storage for result outcome */
//   if (length > string.length) { /* if the given length is larger than the string length */
//     result = string;
//     return result; /* return the result string for this condition */
//   }
//   for (var i = (string.length - length); i < string.length; i++) { /* if the given length is smaller than the string length, then starting from the length number's spot from the end, we start to check each character of the string */

//     result += string[i]; /* add each character from that spot to the end of the string to the result string */
//   }
//   return result; /* return the outcome string */
// }

const lastChars = (length, string) => {
  let result = '';
  if (length > string.length) {
    result += string;
  } else {
    for (let i = string.length - length; i < string.length; i++) {
      result += string[i];
    }
  }
  return result;
};
