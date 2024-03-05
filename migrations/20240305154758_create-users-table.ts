import type { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
  // criar no bd a tabela users 

  return knex.schema.createTable('users', (table) => {
    table.uuid('userId').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.text('password').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updateAt').nullable()
  })
}


export async function down(knex: Knex): Promise<void> {
    // deletar a tabela 
}

