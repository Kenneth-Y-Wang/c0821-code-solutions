const fs = require('fs');

const message = process.argv[2];

fs.writeFile('note.txt', message, 'utf8', err => {
  if (err) throw err;

})
;
