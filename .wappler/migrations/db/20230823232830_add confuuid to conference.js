
exports.up = function(knex) {
  return knex.schema
    .table('conference', async function (table) {
      table.string('confuuid');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference', async function (table) {
      table.dropColumn('confuuid');
    })
};
