/* exported compact */
function compact(array) {
  var result = []; /* create a storage for outcome */
  for (var i = 0; i < array.length; i++) { /* look at each element in array */
    if (array[i] !== undefined && array[i] !== null && array[i] !== 0 && array[i] !== '' && array[i] !== false && Number.isNaN(array[i]) !== true) { /* if the element is NOT 0,'',undefined,NaN,false,or null */
      result.push(array[i]); /* then we add the array[i]to the outcome array */
    }
  }
  return result; /* return the outcome array */
}
