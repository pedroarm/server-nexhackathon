import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id_teams').primary();
    table.string('title').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('teams');
}