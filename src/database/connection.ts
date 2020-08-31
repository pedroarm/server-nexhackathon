import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host : 'mysql669.umbler.com',
    port : 41890,
    user : 'nextestdb',
    password : 'n12345678',
    database : 'nextest'
  }
});

export default db;