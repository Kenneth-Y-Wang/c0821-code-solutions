/* exported tail */
function tail(array) {
  var result = []; /* creat a storage for the outcome */
  for (var i = 0; i < array.length; i++) { /* look at each index of element in the array */
    if (i > 0) { /* starting from the second element */
      result.push(array[i]); /* adding each element from the array starting the second element to the outcome array */
    }
  }
  return result; /* return the outcome storage array */
}

/* faster version

function tail(array){
  array.shift();
  return array;
}

*/
