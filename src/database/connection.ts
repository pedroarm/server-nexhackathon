import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host : 'mysql669.umbler.com',
    port : 41890,
    user : 'nexdb',
    password : 'uAdODK7tWYz',
    database : 'nexhacka'
  }
});

export default db;