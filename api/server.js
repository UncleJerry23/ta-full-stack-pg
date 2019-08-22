require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());

app.get('/api/bugs', (req, res) => {
  client.query(`
        SELECT
            id,
            name,
            description,
            deadliness,
            image
        FROM bugs;
    `)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      res.status(500).json({
        error: err.message || err
      });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log('server running on PORT', PORT);
});
