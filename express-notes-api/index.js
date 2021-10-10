const express = require('express');
const app = express();

const expressJson = express.json();

app.use(expressJson);

const noteBook = require('./data.json');
const fs = require('fs');

app.get('/api/notes', function (req, res) {
  const notesArray = [];
  for (const key in noteBook.notes) {
    notesArray.push(noteBook.notes[key]);
  }
  res.status(200).json(notesArray);

});

app.get('/api/notes/:id', function (req, res) {
  const noteIndex = req.params.id;

  if (Number(noteIndex) < 0 || Number.isInteger(Number(noteIndex)) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!noteBook.notes[noteIndex]) {
    res.status(404).json({ error: `can not find note with id ${noteIndex}` });
  } else {
    res.status(200).json(noteBook.notes[noteIndex]);
  }

});

app.post('/api/notes', function (req, res) {

  const note = req.body;

  if (Object.keys(note).length === 0 || note.content === '') {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  note.id = noteBook.nextId;
  noteBook.notes[String(noteBook.nextId)] = note;
  noteBook.nextId++;

  const updatedNote = JSON.stringify(noteBook, null, 2);

  fs.writeFile('data.json', updatedNote, 'utf8', err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(note);
    }
  });

});

app.delete('/api/notes/:id', function (req, res) {

  const noteIndex = req.params.id;

  if (Number(noteIndex) < 0 || Number.isInteger(Number(noteIndex)) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!noteBook.notes[noteIndex]) {
    res.status(404).json({ error: `can not find note with id ${noteIndex}` });
  } else {
    delete noteBook.notes[noteIndex];

    const updatedNote = JSON.stringify(noteBook, null, 2);

    fs.writeFile('data.json', updatedNote, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });

  }
});

app.put('/api/notes/:id', function (req, res) {

  const noteIndex = req.params.id;
  const note = req.body;
  if (Number(noteIndex) < 0 || Number.isInteger(Number(noteIndex)) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (Object.keys(note).length === 0 || note.content === '') {
    res.status(400).json({ error: 'content is a required field' });

  } else if (!noteBook.notes[noteIndex]) {
    res.status(404).json({ error: `can not find note with id ${noteIndex}` });
  } else {

    note.id = Number(noteIndex);
    noteBook.notes[noteIndex] = note;

    const updatedNote = JSON.stringify(noteBook, null, 2);

    fs.writeFile('data.json', updatedNote, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(note);
      }
    });

  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
