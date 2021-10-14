const express = require('express');
const app = express();

const expressJson = express.json();

app.use(expressJson);

const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      // console.log(result.rows);
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const input = req.body;

  if (input.score < 0 || input.score > 100 || Number.isInteger(input.score) === false) {
    res.status(400).json({ error: 'score must be a positive integer between 0 to 100' });

  } else if (typeof input.name === 'undefined') {
    res.status(400).json({ error: 'name is a required field' });

  } else if (typeof input.course === 'undefined') {
    res.status(400).json({ error: 'course is a required field' });

  } else {
    const value = [];
    for (const key in input) {
      value.push(input[key]);
    }
    // console.log(value);

    const sql = `
   insert into "grades" ("name","course","score")
   values ($1,$2,$3)
   returning *
  `;
    db.query(sql, value)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const input = req.body;
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });

  } else if (input.score < 0 || input.score > 100 || Number.isInteger(input.score) === false) {
    res.status(400).json({ error: 'score must be a positive integer between 0 to 100' });

  } else if (typeof input.name === 'undefined') {
    res.status(400).json({ error: 'name is a required field' });

  } else if (typeof input.course === 'undefined') {
    res.status(400).json({ error: 'course is a required field' });

  } else {
    const value = [];
    for (const key in input) {
      value.push(input[key]);
    }
    value.push(gradeId);

    const sql = `
    update "grades"
       set "name"=$1,
           "course"=$2,
           "score"=$3
      where "gradeId" = $4
      returning *
    `;

    db.query(sql, value)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  } else {
    const sql = `
    delete from "grades"
     where "gradeId" = $1
     returning *
    `;
    const value = [gradeId];

    db.query(sql, value)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {

          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {

          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });

  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
