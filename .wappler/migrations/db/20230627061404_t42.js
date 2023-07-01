
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.string('role', 255).defaultTo(P).alter();
    })
    .table('users', async function (table) {
      table.datetime('date_enrolled').defaultTo(knex.fn.now()).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.datetime('date_enrolled').defaultTo().alter();
    })
    .table('roles', async function (table) {
      table.string('role', 255).defaultTo(function i(t){t!==x&&r(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}).alter();
    })
};
