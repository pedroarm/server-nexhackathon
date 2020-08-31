import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('peoples').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('teams');
}