// /* exported equal */

// // make both first and second array to string by using stringfy method
// // for the string a and b
// // if a and b are stritly equal, then return true
// // otherwise, return false

// function equal(first, second) {

//   var a = JSON.stringify(first);
//   var b = JSON.stringify(second);
//   if (a === b) {
//     return true;
//   }
//   return false;
// }

const equal = (first, second) => {
  let equalIndex = 0;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (i === j && first[i] === second[j]) {
        equalIndex++;
      }
    }
  }
  return equalIndex === first.length && equalIndex === second.length;
};
