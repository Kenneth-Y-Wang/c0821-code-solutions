// /* exported capitalizeWords */
// function capitalizeWords(string) {
//   var words = ''; /* create a storage to store the string in all lower case */
//   var middle = ''; /* create a storage for words to stay to create an array */
//   var array = []; /* create a storage for the array */
//   var result = ''; /* create a storage for outcome */

//   for (var i = 0; i < string.length; i++) { /* first, for each character in string */
//     words += string.charAt(i).toLowerCase(); /* add each character in its lower case to the words storage */
//   }
//   for (var a = 0; a < words.length; a++) { /* once we have the words string, we look at each character inside, one at a time */
//     if (words[a] === ' ') { /* once a space is reached, we push the added word to the array */
//       array.push(middle);
//       middle = ''; /* after the word being added to array, we clear the string for next word */
//     } else {
//       middle += words[a];/* for all the other characters in the words string, we add them one by one to the middle storage, waiting to be added to array */
//     }
//   }
//   array.push(middle); /* add the last word from middle string to array */

//   for (var j = 0; j < array.length; j++) { /* once the array is formed, we check each word in array one by one */
//     array[j] = array[j].charAt(0).toUpperCase() + array[j].substr(1); /* each word will be converted to first letter upper case with the rest of letters lower case. */
//   }
//   for (var b = 0; b < array.length; b++) { /* once each word in array are converted, now we look at each word in array again, one by one */
//     if (b === (array.length - 1)) { /* if the index of word is the last word in array, its being added to result string without following by a space */
//       result += array[b];
//     } else {
//       result += array[b] + ' '; /* every word in array will be added to result string followed by a space */
//     }
//   }
//   return result; /* return the result string */
// }

// /* easier version
// function capitalizeWords(string)
// var words = '';
// var array = [];
// var result = '';

// for (var i = 0; i < string.length; i++) {
//   words += string.charAt(i).toLowerCase();
// }
// array = words.split(' ');
// for (var j = 0; j < array.length; j++) {
//   array[j] = array[j].charAt(0).toUpperCase() + array[j].substr(1);
// }
// result = array.join(' ');
// return result;
// }

// */

const capitalizeWords = string => {
  const array = string.split(' ');

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
  }

  const result = array.join(' ');
  return result;
};
