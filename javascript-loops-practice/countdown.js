/* exported countdown */
// function countdown(number) {
//   var count = [];
//   for (var i = 0; i <= number; i++) {
//     count.unshift(i);
//   }
//   return count;
// }

const countdown = number => {
  const count = [];
  for (let i = 0; i < number + 1; i++) {
    count.unshift(i);
  }
  return count;
};
