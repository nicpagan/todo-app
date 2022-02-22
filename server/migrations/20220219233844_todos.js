exports.up = async knex => {
    await knex.schema.createTable('todos', table => {
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.text('message', 256).notNullable();
      table.boolean('completed').notNullable().defaultTo(false)
    });
  };
 
  exports.down = async knex => {
    await knex.schema.dropTableIfExists('todos');
  };

