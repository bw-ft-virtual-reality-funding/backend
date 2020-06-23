const db = require('../../data/dbConfig');

module.exports = {
    add, 
    find,  
    findById, 
    remove, 
    update
  };
  
  function find() {
    return db('projects');
  };
  
  
  async function add(project) {
    const [id] = await db('projects').insert(project);
  
    return findById(id);
  };
  
  function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  };
  
  function remove(id) {
    return db('projects')
      .where({ id })
      .first()
      .del();
  };
  
  function update(project, id) {
    return db('projects')
      .where({ id })
      .update(project);
  };