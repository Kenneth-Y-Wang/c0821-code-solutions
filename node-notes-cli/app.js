const noteBook = require('./data.json');
const fs = require('fs');

const commandWord = process.argv[2];

if (commandWord === 'read') {
  for (const key in noteBook.notes) {
    console.log(key + ': ' + noteBook.notes[key]);
  }
} else if (commandWord === 'create') {
  const newNote = process.argv[3];
  noteBook.notes[String(noteBook.nextId)] = newNote;
  noteBook.nextId++;
  const updatedNote = JSON.stringify(noteBook, null, 2);

  fs.writeFile('data.json', updatedNote, 'utf8', err => {
    if (err) throw err;
    console.log('Your save is successful');

  });

} else if (commandWord === 'delete') {
  const deleteIndex = process.argv[3];

  delete noteBook.notes[deleteIndex];

  const updatedNote = JSON.stringify(noteBook, null, 2);
  fs.writeFile('data.json', updatedNote, 'utf8', err => {
    if (err) throw err;
    console.log('Your save is successful');

  });
} else if (commandWord === 'update') {
  const editIndex = process.argv[3];
  const editContent = process.argv[4];

  noteBook.notes[editIndex] = editContent;

  const updatedNote = JSON.stringify(noteBook, null, 2);
  fs.writeFile('data.json', updatedNote, 'utf8', err => {
    if (err) throw err;
    console.log('Your save is successful');

  });
} else {
  console.log('Wrong Command!');
}
