/* exported last */
function last(array) {
  for (var i = 0; i < array.length; i++) { /* look at each index of array, one a time */
    if (i === (array.length - 1)) { /* if the index i is strictly equaling to the last index of array */
      return array[i]; /* then return the element at the last index of the array */
    }
  }
}

/* fast version

function last(array){
  return array[array.length-1];
}

*/
