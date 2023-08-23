
exports.up = function(knex) {
  return knex.schema
    .table('meetingtypes', async function (table) {
      table.renameColumn('Meetingtype', 'meetingtype');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('meetingtypes', async function (table) {
      table.renameColumn('meetingtype', 'Meetingtype');
    })
};
