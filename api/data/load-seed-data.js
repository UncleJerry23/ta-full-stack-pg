require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const bugs = require('./bug-seed');
// note: you will need to create the database!
const client = new Client(process.env.DATABASE_URL);

client.connect()
  .then(() => {
        // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      bugs.map(bug => {
        return client.query(`
                    INSERT INTO bugs (name, description, deadliness, image)
                    VALUES ($1, $2, $3, $4);
                `,
        [bug.name, bug.description, bug.deadliness, bug.image]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
