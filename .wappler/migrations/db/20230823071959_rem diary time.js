
exports.up = function(knex) {
  return knex.schema
    .table('diary', async function (table) {
      table.dropColumn('diary_time');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diary', async function (table) {
      table.time('diary_time');
    })
};
