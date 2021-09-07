/* exported union */
function union(first, second) {
  var final = [];
  var secondCopy = [];

  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      secondCopy.push(second[i]);
    }
  }
  final = first.concat(secondCopy);
  return final;
}
