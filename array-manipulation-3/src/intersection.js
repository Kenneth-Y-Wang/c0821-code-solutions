/* exported intersection */
function intersection(first, second) {
  var final = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        final.push(first[i]);
      }
    }
  }
  return final;
}
