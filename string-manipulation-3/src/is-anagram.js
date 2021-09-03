/* exported isAnagram */
function isAnagram(firstString, secondString) {
  // var first = '';
  // var second = '';
  var firstArray = [];
  var secondArray = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArray.push(firstString[i]);
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondArray.push(secondString[j]);
    }
  }

  for (var a = 0; a < firstArray.length; a++) {
    secondArray.splice(secondArray.indexOf(firstArray[a]), 1);
  }

  if (secondArray === []) {
    return true;
  }

  return false;
}
