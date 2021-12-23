/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// function isUnderFive(number) {
//   if (number < 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isUnderFive = number => number < 5;

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isEven = number => number % 2 === 0;

// function startsWithJ(string) {
//   if (string[0] === 'J') {
//     return true;
//   } else {
//     return false;
//   }
// }

const startsWithJ = string => string.startsWith('J');

// function isOldEnoughToDrink(person) {
//   if (person.age >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isOldEnoughToDrink = person => person.age >= 21;

// function isOldEnoughToDrive(person) {
//   if (person.age >= 16) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isOldEnoughToDrive = person => person.age >= 16;

// function isOldEnoughToDrinkAndDrive(person) {
//   return false;
// }

const isOldEnoughToDrinkAndDrive = person => false;

// function categorizeAcidity(pH) {
//   if (pH >= 0 && pH < 7) {
//     return 'acid';
//   } else if (pH === 7) {
//     return 'neutral';
//   } else if (pH > 7 && pH <= 14) {
//     return 'base';
//   } else {
//     return 'invalid pH level';
//   }
// }

const categorizeAcidity = pH => {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};

// function introduceWarnerBro(name) {
//   if (name === 'yakko' || name === 'wakko') {
//     return 'We\'re the Warner brothers!';
//   } else if (name === 'dot') {
//     return 'I\'m cute~';
//   } else {
//     return 'Goodnight everybody!';
//   }
// }

const introduceWarnerBro = name => {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the Warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
};
