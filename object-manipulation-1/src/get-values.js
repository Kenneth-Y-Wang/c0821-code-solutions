// /* exported getValues */
// function getValues(object) {
//   var result = []; /* create a storage for outcome array */
//   for (var key in object) { /* look at each property in perimeter object */
//     result.push(object[key]); /* add values from each property of object to the storage array */
//   }
//   return result; /* return storage array as function outcome */
// }

const getValues = object => {
  const result = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
