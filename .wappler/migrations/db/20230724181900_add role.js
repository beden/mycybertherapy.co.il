
exports.up = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.string('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.dropColumn('role');
    })
};
