require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// note: you will need to create the database!

const client = new Client(process.env.DATABASE_URL);

client.connect()
  .then(() => {
    return client.query(`
            CREATE TABLE bugs (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL,
                description VARCHAR(256) NOT NULL,
                deadliness VARCHAR(256) NOT NULL,
                image VARCHAR(256) NOT NULL
            );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
