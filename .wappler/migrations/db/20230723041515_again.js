
exports.up = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.datetime('submission_date').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.dropColumn('submission_date');
    })
};
