/* exported zip */
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

// for (var a=0;a<middle.length;i=)
// // if (middle.length === 2) {
// //   final.push(middle);
// //   middle = [];
// // }
// for (var i = 0; i < first.length; i++) {
// middle.push(first[i]);
// // }
// for (var j = 0; j < first.length; j++) {
// middle.push(second[j]);
// // }

// return final;

//     for (var j = 0; j < first.length; j++) {
//       if (middle.length === 2) {
//         final.push(middle);
//         middle = [];
//       } else {
//         middle.push(first[i], second[j]);
//       }
//     }
//   }
//   final.push(middle);
//   return final;
// }
