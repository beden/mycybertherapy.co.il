
exports.up = function(knex) {
  return knex.schema
    .table('diary', async function (table) {
      table.renameColumn('date', 'diary_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diary', async function (table) {
      table.renameColumn('diary_date', 'date');
    })
};
