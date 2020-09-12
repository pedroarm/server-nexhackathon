import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id_user').primary();
    table.string('name').notNullable();
    table.string('ra').notNullable();
    table.string('school').notNullable();
    table.integer('date_of_birth').notNullable();
    table.string('cell_phone').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('profile_image');
    table.integer('headline');
    table.integer('description');
    table.integer('points').defaultTo(0);
    table.string('linkedin');
    table.string('github');
    table.string('instagram');

    table.integer('fk_teams').references('id_teams').inTable('teams');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}