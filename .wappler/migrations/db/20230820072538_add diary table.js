
exports.up = function(knex) {
  return knex.schema
    .createTable('diary', async function (table) {
      table.increments('diary_id');
      table.datetime('date');
      table.string('title');
      table.string('entrytype');
    })
    .createTable('diary_attedees', async function (table) {
      table.increments('attend_id');
      table.string('id_user');
      table.integer('diary_id').unsigned();
      table.foreign('diary_id').references('diary_id').inTable('diary').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('users', async function (table) {
      table.string('signup_code');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('signup_code');
    })
    .dropTable('diary_attedees')
    .dropTable('diary')
};
