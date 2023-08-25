
exports.up = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.string('token');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.dropColumn('token');
    })
};
