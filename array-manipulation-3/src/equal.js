/* exported equal */

// make both first and second array to string by using stringfy method
// for the string a and b
// if a and b are stritly equal, then return true
// otherwise, return false

function equal(first, second) {

  var a = JSON.stringify(first);
  var b = JSON.stringify(second);
  if (a === b) {
    return true;
  }
  return false;
}
