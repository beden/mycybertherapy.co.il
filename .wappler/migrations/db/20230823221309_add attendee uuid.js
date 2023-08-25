
exports.up = function(knex) {
  return knex.schema
    .table('diary_attedees', async function (table) {
      table.string('attuuid');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diary_attedees', async function (table) {
      table.dropColumn('attuuid');
    })
};
