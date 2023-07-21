
exports.up = function(knex) {
  return knex.schema
    .createTable('diycbt', async function (table) {
      table.increments('id');
      table.string('ci');
      table.string('cbt');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('diycbt')
};
