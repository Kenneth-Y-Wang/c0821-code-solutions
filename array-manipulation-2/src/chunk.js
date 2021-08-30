/* exported chunk */
function chunk(array, size) {
  var final = [];
  if (size > array.length) {
    final = array;
    return final;
  }

  for (var i = 0; i < array.length; i += size) {
    final.push(array.slice(i, i + size));
  }
  return final;
}

/*
function chunk(array, size) {
  var result = [];
  var final = [];
  if (size > array.length) {
    final = array;
    return final;
  }

  for (var i = 0; i < array.length; i += size) {
    if (result.length === size) {
      final.push(result);
      result = [];
    } else {
      result[i] = array[i];
    }
  }
  final.push(result);
  return final;
}
*/
