/* exported countdown */
function countdown(number) {
  var count = [];
  for (var i = 0; i <= number; i++) {
    count.unshift(i);
  }
  return count;
}
