
exports.up = function(knex, toSQL) {
  const statements = [
    knex('users').where('id_users', 25).del()
  ];
  if (toSQL) {
    return statements.map(statement => statement.toString());
  }

  return statements.reduce(function (p, v) {
    return p.then(() => v);
  }, Promise.resolve());
}

exports.down = async function(knex) {
  await knex('users').insert({"id_users":25,"first_name":"Michael","family_name":"Benjamin","email":"mib@myray.com","password":"aea762bad2382dab2329b3256330c6afaa1fc10954536dc02246ae1636132f16","date_enrolled":"2023-08-12T11:40:40Z"}).onConflict('id_users').ignore()

};
