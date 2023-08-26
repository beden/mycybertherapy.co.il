
exports.up = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.boolean('ishost').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference_participants', async function (table) {
      table.dropColumn('ishost');
    })
};
