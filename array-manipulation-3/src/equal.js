/* exported equal */
function equal(first, second) {
  var a = JSON.stringify(first);
  var b = JSON.stringify(second);
  if (a === b) {
    return true;
  }
  return false;
}
