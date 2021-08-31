/* exported reverse */
function reverse(array) {
  var result = []; /* create a storage for outcome */
  for (var i = (array.length - 1); i >= 0; i--) { /* look at each index from the array, but from the end to the front */
    result.push(array[i]); /* add each element to the outcome storage */

  }
  return result; /* return the outcome array */
}
