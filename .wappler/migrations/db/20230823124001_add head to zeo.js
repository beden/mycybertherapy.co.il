
exports.up = function(knex) {
  return knex.schema
    .table('seo', async function (table) {
      table.string('head');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('seo', async function (table) {
      table.dropColumn('head');
    })
};
