
exports.up = function(knex) {
  return knex.schema
    .createTable('seo', async function (table) {
      table.increments('seo_id');
      table.string('title');
      table.text('description');
      table.string('page');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('seo')
};
