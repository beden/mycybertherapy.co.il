
exports.up = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.undefined('role_Id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.dropColumn('role_Id');
    })
};
