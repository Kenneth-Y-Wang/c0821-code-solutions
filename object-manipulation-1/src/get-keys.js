/* exported getKeys */
function getKeys(object) {
  var result = []; /* create storage array for outcome */
  for (var key in object) { /* look at each property in object */
    result.push(key); /* add each property from the object to the storage array */
  }
  return result; /* return the array for function outcome */
}
