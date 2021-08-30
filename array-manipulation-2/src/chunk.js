/* exported chunk */
/* function chunk(array, size) {
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
*/
/* create a storage to store each 'size' of array
create a final storage for outcome
if the size is bigger than the array length, then return the array itself as final outcome
if the size is smaller then the array length, then we start to look at each element in given array
we add each element from array to the storage 'result'
once the result storage's length reachs to 'size',then we push the array 'result' to the final array, and empty the result array
keep the process until the rest of elements from given array are added to 'result' array, then push the result to final array
return the final array

*/
function chunk(array, size) {
  var result = [];
  var final = [];
  if (size > array.length) {
    final = array;
    return final;
  }

  for (var i = 0; i < array.length; i++) {
    if (result.length === size) {
      final.push(result);
      result = [];
      result.push(array[i]);

    } else {
      result.push(array[i]);
    }
  }
  final.push(result);
  return final;
}
