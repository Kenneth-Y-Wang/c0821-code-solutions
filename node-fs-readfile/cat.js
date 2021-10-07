const fs = require('fs');

function readFile(a) {
  fs.readFile(process.argv[a], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    const NextIndex = a + 1;

    if (NextIndex < process.argv.length) {
      readFile(NextIndex);
    }
  });
}

readFile(2);
