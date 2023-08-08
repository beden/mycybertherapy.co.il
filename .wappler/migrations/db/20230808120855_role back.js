
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.renameColumn('part_role', 'role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.renameColumn('role', 'part_role');
    })
};
