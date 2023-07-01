
exports.up = function(knex) {
  return knex.schema
    .createTable('users', async function (table) {
      table.increments('id_users');
      table.string('first_name');
      table.string('family_name');
      table.string('email');
      table.string('password');
      table.datetime('date_enrolled').defaultTo(NOW);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
