const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findById, 
    remove, 
    update
  };
  
  function find() {
    return db('users').select('id', 'username', 'name', 'role');
  };

  
  function add(user) {
    return db('users')
      .insert(user);
  };
  
   function findById(id) {
    return db('users')
      .where({ id })
      .select('name', 'role', "id", 'username')
      .first();
  };
  
  function remove(id) {
    return db('users')
      .where({ id })
      .first()
      .delete();
  };
  
  function update(user, id) {
    return db('users')
      .where({ id })
      .update(user);
  }