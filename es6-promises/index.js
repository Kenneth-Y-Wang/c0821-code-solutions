const takeAChance = require('./take-a-chance');
const result = takeAChance('Kenneth');

result.then(value => {
  console.log(value);
});

result.catch(error => {
  console.error(error.message);
});
