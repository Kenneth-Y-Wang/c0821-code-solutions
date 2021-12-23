/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// function getNumbersToTen() {
//   var numbers = [];
//   var currentNumber = 1;
//   while (currentNumber <= 10) {
//     numbers.push(currentNumber);
//     currentNumber += 1;
//   }
//   return numbers;
// }

const getNumbersToTen = () => {
  const result = [];
  for (let i = 1; i < 11; i++) {
    result.push(i);
  }
  return result;
};

// function getEvenNumbersToTwenty() {
//   var evenNumbers = [];
//   var currentNumber = 2;
//   while (currentNumber <= 20) {
//     evenNumbers.push(currentNumber);
//     currentNumber += 2;
//   }
//   return evenNumbers;
// }

const getEvenNumbersToTwenty = () => {
  const result = [];
  for (let i = 2; i < 22; i += 2) {
    result.push(i);
  }
  return result;
};

// function repeatWord(word, times) {
//   var count = 1;
//   var repeated = '';
//   while (count <= times) {
//     repeated += word;
//     count++;
//   }
//   return repeated;
// }

const repeatWord = (word, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += word;
  }
  return result;
};

// function logEachCharacter(string) {
//   for (var i = 0; i < string.length; i++) {
//     console.log(string[i]);
//   }
// }

const logEachCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

// function doubleAll(numbers) {
//   var doubled = [];
//   for (var i = 0; i < numbers.length; i++) {
//     doubled.push(numbers[i] * 2);
//   }
//   return doubled;
// }

const doubleAll = numbers => numbers.map(number => number * 2);

// function getKeys(object) {
//   var keys = [];
//   for (var key in object) {
//     keys.push(key);
//   }
//   return keys;
// }

const getKeys = object => {
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
};

// function getValues(object) {
//   var values = [];
//   for (var key in object) {
//     values.push(object[key]);
//   }
//   return values;
// }

const getValues = object => {
  const result = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
