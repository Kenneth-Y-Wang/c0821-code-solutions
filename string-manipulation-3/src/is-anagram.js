// /* exported isAnagram */

// // create two empty arraies to store the given two parameters strings without the space
// // after we have the first and second array, then we loop every letter from first array
// // by using indexOf, if the letter from firstarray has an index in second array
// // then we use splice to delete that letter from second array
// // after the loop, if the second array has 0 length, then return true for the function
// // if not, then return false

// function isAnagram(firstString, secondString) {

//   var firstArray = [];
//   var secondArray = [];

//   for (var i = 0; i < firstString.length; i++) {
//     if (firstString[i] !== ' ') {
//       firstArray.push(firstString[i]);
//     }
//   }

//   for (var j = 0; j < secondString.length; j++) {
//     if (secondString[j] !== ' ') {
//       secondArray.push(secondString[j]);
//     }
//   }

//   for (var a = 0; a < firstArray.length; a++) {
//     if (secondArray.indexOf(firstArray[a]) !== -1) {
//       secondArray.splice(secondArray.indexOf(firstArray[a]), 1);
//     }
//   }

//   if (secondArray.length === 0) {
//     return true;
//   }

//   return false;
// }

const isAnagram = (firstString, secondString) => {
  const firstArray = [];
  const secondArray = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArray.push(firstString[i]);
    }
  }

  for (let j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondArray.push(secondString[j]);
    }
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (secondArray.indexOf(firstArray[i]) !== -1) {
      secondArray.splice(secondArray.indexOf(firstArray[i]), 1);
    }
  }

  return secondArray.length === 0;

};

// const isAnagram = (firstString, secondString) => {
//   const firstArray = firstString.replace(' ', '').split('');
//   const secondArray = secondString.replace(' ', '').split('');

//   if (firstArray.length !== secondArray.length) {
//     return false;
//   } else {
//     for (let i = 0; i < firstArray.length; i++) {
//       if (secondArray.indexOf(firstArray[i]) !== -1) {
//         secondArray.splice(secondArray.indexOf(firstArray[i]), 1);
//       }
//     }
//     return secondArray.length === 0;
//   }
// };
