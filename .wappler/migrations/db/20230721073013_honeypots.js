
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('product_id');
      table.string('product_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('product_id');
      table.dropColumn('product_name');
    })
};
