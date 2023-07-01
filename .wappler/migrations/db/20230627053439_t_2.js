
exports.up = function(knex) {
  return knex.schema
    .createTable('roles', async function (table) {
      table.increments('id_roles');
      table.string('id_users');
      table.string('role').defaultTo(P);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roles')
};
