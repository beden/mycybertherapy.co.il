
exports.up = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.string('relations');
      table.string('attention');
      table.string('feelings');
      table.string('existential');
      table.string('summation');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.dropColumn('relations');
      table.dropColumn('attention');
      table.dropColumn('feelings');
      table.dropColumn('existential');
      table.dropColumn('summation');
    })
};
