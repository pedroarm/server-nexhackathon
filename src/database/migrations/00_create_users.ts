import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('ra').notNullable();
    table.string('school').notNullable();
    table.integer('born_date').notNullable();
    table.string('cell_phone').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('profile_image');
    table.integer('points');
    table.string('linkedin');
    table.string('github');
    table.string('instagram');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}