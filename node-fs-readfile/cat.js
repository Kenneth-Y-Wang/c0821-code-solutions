const fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
  ;
}
// const fileName = process.argv[2];
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })
//   ;
