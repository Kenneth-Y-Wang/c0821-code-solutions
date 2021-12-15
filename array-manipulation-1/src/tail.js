// /* exported tail */
// function tail(array) {
//   var result = []; /* creat a storage for the outcome */
//   for (var i = 1; i < array.length; i++) { /* look at each index of element in the array starting from the second index */
//     result.push(array[i]); /* adding each element from the array starting the second element to the outcome array */
//   }
//   return result; /* return the outcome storage array */
// }

// /* faster version

// function tail(array){
//  var result=array.slice(1,array.length);
//   return result;
// }

// */

const tail = array => {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
