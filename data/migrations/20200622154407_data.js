
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128).notNullable().unique();
      tbl.string('password', 128).notNullable();
      tbl.string('name', 255).notNullable();
      tbl.string('role', 128).notNullable();
  })
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('title').notNullable();
      tbl.string('description').notNullable();
      tbl.string('img_url').defaultTo("https://picsum.photos/200") //placeholder image
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('users');
};
