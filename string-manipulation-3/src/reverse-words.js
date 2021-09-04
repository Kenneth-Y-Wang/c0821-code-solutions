/* exported reverseWords */
function reverseWords(string) {
  var firstStorage = '';
  var wordStorage = '';
  var secondStorage = [];
  var thirdStorage = [];
  var final = '';

  for (var i = string.length - 1; i > -1; i--) {
    firstStorage += string[i];
  }

  for (var j = 0; j < firstStorage.length; j++) {
    if (firstStorage[j] === ' ') {
      secondStorage.push(wordStorage);
      wordStorage = '';
    } else {
      wordStorage += firstStorage[j];
    }
  }
  secondStorage.push(wordStorage);

  for (var a = secondStorage.length - 1; a > -1; a--) {
    thirdStorage.push(secondStorage[a]);
  }

  for (var b = 0; b < thirdStorage.length; b++) {
    if (b === thirdStorage.length - 1) {
      final += thirdStorage[b];
    } else {
      final += thirdStorage[b] + ' ';
    }
  }
  return final;
}
