/* exported head */
function head(array) {
  for (var i = 0; i < array.length; i++) { /* look at the index of each element in the array */
    if (i === 0) { /* if the index i strictly equals to 0, which is the index of the first element */
      return array[i]; /* return the array at the index i */
    }
  }
}

/* fast version

function head(array){
  return array[0];
}

*/
