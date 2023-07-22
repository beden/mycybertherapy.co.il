
exports.up = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.integer('user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diycbt', async function (table) {
      table.dropColumn('user_id');
    })
};
