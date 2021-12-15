// /* exported initial */
// function initial(array) {
//   var result = []; /* create a storage for the outcome */
//   for (var i = 0; i < (array.length - 1); i++) { /* look at each index for the array except the last index */
//     result.push(array[i]); /* add each element from the array to the outcome storage */
//   }

//   return result; /* return the outcome array as function outcome */
// }

// /* faster version

// function initial(array){
//   var result=array.slice(0,(array.length-1));
//   return result;
// }

// */

const initial = array => {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
};
