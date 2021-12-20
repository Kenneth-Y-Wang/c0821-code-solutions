/* exported reverseWords */

// first , we create an empty string, to have the parameter string stored in reverse order
// after we have the reversed string, we loop for space and add each letter to a wordStorage string
// each word from wordStorage string will be pushed to the secondStorage array
// after the secondStorage array is formed, we use a loop to go through every element in that array from the back to the 0 index
// we push every element to the thirdStorage array, with the order of the outcome string. now need to convert the array to string
// by looping through the thirdStorage array, we concatenate each elements to the final string
// return the final string

// function reverseWords(string) {
//   var firstStorage = '';
//   var wordStorage = '';
//   var secondStorage = [];
//   var thirdStorage = [];
//   var final = '';

//   for (var i = string.length - 1; i > -1; i--) {
//     firstStorage += string[i];
//   }

//   for (var j = 0; j < firstStorage.length; j++) {
//     if (firstStorage[j] === ' ') {
//       secondStorage.push(wordStorage);
//       wordStorage = '';
//     } else {
//       wordStorage += firstStorage[j];
//     }
//   }
//   secondStorage.push(wordStorage);

//   for (var a = secondStorage.length - 1; a > -1; a--) {
//     thirdStorage.push(secondStorage[a]);
//   }

//   for (var b = 0; b < thirdStorage.length; b++) {
//     if (b === thirdStorage.length - 1) {
//       final += thirdStorage[b];
//     } else {
//       final += thirdStorage[b] + ' ';
//     }
//   }
//   return final;
// }

const reverseWords = string => {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  const reverseArray = reverseString.split(' ');
  const correctArray = [];
  for (let i = 0; i < reverseArray.length; i++) {
    correctArray.unshift(reverseArray[i]);
  }

  return correctArray.join(' ');
};
