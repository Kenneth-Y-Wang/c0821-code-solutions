/* exported defaults */
function defaults(target, source) {
  var keyTarget = [];
  var keySource = [];
  var result = target;
  for (var key in target) {
    keyTarget.push(key);
  }
  for (var pro in source) {
    keySource.push(pro);
  }

  for (var i = 0; i < keySource.length; i++) {
    if (keyTarget.indexOf(keySource[i]) === -1) {
      result[keySource[i]] = source[keySource[i]];
    }
  }
  return result;
}

//   if (target === {}) {
//     target = source;
//     return target;
//   }

//   for (var key in target) {
//     for (var pro in source) {
//       if (key !== pro) {
//         target[pro] = source[pro];
//       }
//     }
//   }
//   return target;
// }
