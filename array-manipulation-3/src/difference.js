/* exported difference */
function difference(first, second) {
  var firstCopy = [];
  var secondCopy = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      firstCopy.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      secondCopy.push(second[j]);
    }
  }

  var final = firstCopy.concat(secondCopy);
  return final;
}

//   for (var a = 0; a < first.length; a++) {
//     firstCopy.push(first[a]);
//   }

//   for (var b = 0; b < second.length; b++) {
//     secondCopy.push(second[b]);
//   }

//   for (var i = 0; i < firstCopy.length; i++) {
//     if (second.indexOf(firstCopy[i]) !== -1) {
//       secondCopy.splice(second.indexOf(firstCopy[i]), 1);
//       firstCopy.splice(i, 1);
//     }
//   }
//   console.log(firstCopy);
//   console.log(secondCopy);

// }
