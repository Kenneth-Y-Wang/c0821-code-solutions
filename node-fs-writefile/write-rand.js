const fs = require('fs');

const number = Math.random()
;

fs.writeFile('random.txt', String(number), 'utf8', err => {
  if (err) throw err;

});
