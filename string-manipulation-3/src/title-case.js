/* exported titleCase */
/* exported capitalizeWords */

/* create a storage to store the string in all lower case */
/* create a storage for words to stay to create an array */
/* create a storage for the array */
/* create a storage for outcome */
/* first, for each character in string */
/* add each character in its lower case to the words storage */
/* once we have the words string, we look at each character inside, one at a time */
/* once a space is reached, we push the added word to the array */
/* after the word being added to array, we clear the string for next word */
/* for all the other characters in the words string, we add them one by one to the middle storage, waiting to be added to array */
/* add the last word from middle string to array */
/* once the array is formed, we check each word in array starting the second one, one by one */
/* if the word is minor words, then keep all lowercases. if the word contain '-', then cap first letter and the letter after '-'; if the word is Javascript, then return JavaScript; if the word is api, then return API */
/* all the other word will be converted to first letter upper case with the rest of letters lower case. */
/* then we check the first element of the array, with one extra condition that make minor words first letter cap */
/* once each word in array are converted, now we look at each word in array again, one by one */
/* if the index of word is the last word in array, its being added to result string without following by a space */
/* every word in array will be added to result string followed by a space */
/* after the string is formed, then we check each index in string */
/* concatenate each index to a final string, for any index, if its 2 spot ahead is ':', the cap the current index and concatenate it */
/* return the final string */

function titleCase(title) {
  var words = '';
  var middle = '';
  var array = [];
  var result = '';
  var final = '';

  for (var i = 0; i < title.length; i++) {
    words += title.charAt(i).toLowerCase();
  }
  for (var a = 0; a < words.length; a++) {
    if (words[a] === ' ') {
      array.push(middle);
      middle = '';
    } else {
      middle += words[a];
    }
  }
  array.push(middle);

  for (var j = 1; j < array.length; j++) {

    if (array[j] === 'and' || array[j] === 'or' || array[j] === 'nor' || array[j] === 'but' || array[j] === 'a' || array[j] === 'an' || array[j] === 'the' || array[j] === 'as' || array[j] === 'at' || array[j] === 'by' || array[j] === 'for' || array[j] === 'in' || array[j] === 'of' || array[j] === 'on' || array[j] === 'per' || array[j] === 'to') {
      array[j] = array[j].substr(0);

    } else if (array[j].indexOf('-') !== -1) {
      array[j] = array[j].charAt(0).toUpperCase() + array[j].substr(1, array[j].indexOf('-')) + array[j].charAt(array[j].indexOf('-') + 1).toUpperCase() + array[j].substr(array[j].indexOf('-') + 2);
    } else if (array[j].indexOf('javascript') !== -1) {
      array[j] = array[j].charAt(0).toUpperCase() + array[j].substr(1, 3) + array[j].charAt(4).toUpperCase() + array[j].substr(5);
    } else if (array[j].indexOf('api') !== -1) {
      array[j] = array[j].charAt(0).toUpperCase() + array[j].charAt(1).toUpperCase() + array[j].charAt(2).toUpperCase() + array[j].substr(3);
    } else {
      array[j] = array[j].charAt(0).toUpperCase() + array[j].substr(1);
    }

  }
  if (array[0].indexOf('javascript') !== -1) {
    array[0] = array[0].charAt(0).toUpperCase() + array[0].substr(1, 3) + array[0].charAt(4).toUpperCase() + array[0].substr(5);
  } else if (array[0].indexOf('-') !== -1) {
    array[0] = array[0].charAt(0).toUpperCase() + array[0].substr(1, array[0].indexOf('-')) + array[0].charAt(array[0].indexOf('-') + 1).toUpperCase() + array[0].substr(array[0].indexOf('-') + 2);
  } else if (array[0].indexOf('api') !== -1) {
    array[0] = array[0].charAt(0).toUpperCase() + array[0].charAt(1).toUpperCase() + array[0].charAt(2).toUpperCase() + array[0].substr(3);
  } else {
    array[0] = array[0].charAt(0).toUpperCase() + array[0].substr(1);
  }

  for (var b = 0; b < array.length; b++) {
    if (b === (array.length - 1)) {
      result += array[b];
    } else {
      result += array[b] + ' ';
    }
  }
  for (var c = 0; c < result.length; c++) {
    if (result[c - 2] === ':') {
      final += result.charAt(c).toUpperCase();
    } else {
      final += result[c];
    }
  }
  return final;
}
