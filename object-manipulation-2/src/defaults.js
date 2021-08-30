/* exported defaults */
function defaults(target, source) {
  if (target === {}) {
    target = source;
    return target;
  }

  for (var key in target) {
    for (var pro in source) {
      if (key !== pro) {
        target[pro] = source[pro];
      }
    }
  }
  return target;
}
