const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

const expressJson = express.json();

app.use(expressJson);

app.get('/api/grades', function (req, res) {

  const gradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
  // console.log(req.method);

});

app.post('/api/grades', function (req, res) {
  // console.log(req.body);
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;

  res.status(201).json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
