
exports.up = function(knex) {
  return knex.schema
    .createTable('meetingtypes', async function (table) {
      table.increments('mt_id');
      table.string('Meetingtype');
    })
    .table('diary', async function (table) {
      table.renameColumn('entrytype', 'mt_id');
      table.integer('mt_id').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('diary', async function (table) {
      table.renameColumn('mt_id', 'entrytype');
      table.string('entrytype', 255).alter();
    })
    .dropTable('meetingtypes')
};
