
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('authors', (table) => {
    table.increments();
    table.string('fname');
    table.string('lname');
    table.text('bio');
    table.string('portrait');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('authors')
]);
};
