/* exported zip */

// copy each array with firstCopy and secondCopy
// check every element from the firstCopy, one at a time
// when chack each element from firstCopy, check only first elemnt from the second array
// push first element from firstCopy and first element from secondCopy to the middle array
// once the middle array has two elements, then push the middle array to final array, and empty the middle array
// continuous the process until either firstCopy or secondCopy has no more elements, loop break
// push the middle to final the last time
// return final array

function zip(first, second) {

  var firstCopy = [];
  var secondCopy = [];
  var middle = [];
  var final = [];

  for (var a = 0; a < first.length; a++) {
    firstCopy.push(first[a]);
  }

  for (var b = 0; b < second.length; b++) {
    secondCopy.push(second[b]);
  }

  for (var i = 0; i < firstCopy.length; i++) {
    for (var j = 0; j < secondCopy.length; j += 0) {
      if (firstCopy.length === 0 || secondCopy.length === 0) {
        break;
      } else if (middle.length === 2) {
        final.push(middle);
        middle = [];
      } else {
        middle.push(firstCopy.shift(), secondCopy.shift());
      }
    }
  }
  final.push(middle);
  return final;
}
