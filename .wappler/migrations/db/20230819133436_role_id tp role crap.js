
exports.up = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.renameColumn('role_id', 'role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.renameColumn('role', 'role_id');
    })
};
