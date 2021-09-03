/* exported isPalindromic */
function isPalindromic(string) {
  var first = '';
  var middle = '';
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      first += string[j];
    }
  }

  for (var i = first.length - 1; i > -1; i--) {
    middle += first[i];
  }

  if (middle === first) {
    return true;
  } else {
    return false;
  }
}

//   for (var i = 0; i < string.length; i++) {
//     for (i = (string.length - 1); i > -1; i--) {
//       if (string[i] === string[string.length - 1]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
