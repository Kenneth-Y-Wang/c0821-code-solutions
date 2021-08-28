/* exported toObject */
function toObject(keyValuePair) {
  var result = {}; /* create the storage for outcome */
  var key = keyValuePair[0]; /* find out the outcome object property */
  var value = keyValuePair[1]; /* find out the outcome object property value */
  result[key] = value; /* assign the value to the property of the result object */
  return result; /* return the result object */

}
