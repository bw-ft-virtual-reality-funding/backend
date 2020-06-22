
const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
          username: 'admin',
          password: bcrypt.hashSync('password', 10),
          name: 'Jane Doe',
          role: 'fundraiser'
        },
        {id: 2, 
          username: 'lambda',
          password: bcrypt.hashSync('password', 10),
          name: 'Lambda Student',
          role: 'funder'
        }
      ]);
    });
};
