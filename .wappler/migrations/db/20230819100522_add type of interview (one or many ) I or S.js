
exports.up = function(knex) {
  return knex.schema
    .table('conference', async function (table) {
      table.string('type').defaultTo(I);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('conference', async function (table) {
      table.dropColumn('type');
    })
};
