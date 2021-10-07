const fs = require('fs');
const array = [];
const index = [];

for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    const newFile = {};
    newFile.index = i;
    newFile.content = data;
    array.push(newFile);
    console.log(array);

  });

}
for (var a = 0; a < array.length; a++) {
  for (var key in array[a]) {
    index.push(key);
  }
  console.log(index);
}

index.sort(function (a, b) { return a - b; });

for (var b = 0; b < index.length; b++) {
  for (var c = 0; c < array.length; c++) {
    for (const key in array[c]) {
      if (key === index[b]) {
        console.log(array[c][key]);
      }
    }
  }
}
// function readFile(a) {
//   fs.readFile(process.argv[a], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);

//   });

//   const NextIndex = a + 1;

//   if (NextIndex < process.argv.length) {
//     readFile(NextIndex);
//   }
// }

// readFile(2);

// let printFile = function f(a) {
//   fs.readFile(process.argv[a], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

//   const NextIndex = a + 1;

//   if (NextIndex < process.argv.length) {
//     f(NextIndex);
//   }
// };

// const rightOrder = printFile;
// printFile = null;
// rightOrder(2);
// for (var i = 2; i < process.argv.length; i++) {
//   fs.readFile(process.argv[i], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })
//   ;
// }
// const fileName = process.argv[2];
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })
//   ;
