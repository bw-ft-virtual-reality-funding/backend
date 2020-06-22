
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, 
          title: 'DevDesk Queue',
          description: 'Students at Lambda School need a place where they can escalate their concerns and receive help. This app will allow an admin to manage help desk tickets that come in from Lambda School Students. It also allows students to submit a help desk ticket, categorize it and post it to the help channel.'
        },
        {id: 2, 
          title: 'Use My Tech Stuff',
          description: 'Use My Tech Stuff: like AirBnB, but for high end electronics. Are you tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!'
        },
        {id: 3, 
          title: 'Saltiest Hacker News Trolls',
          description: 'Use Hacker News comment data to rank commenters based on comment sentiment (saltiness/negativity)'
        },
        {id: 4, 
          title: 'Replate',
          description: 'Replate is an easy to use app that lets them effortlessly have those extras picked up by a Replate volunteer and donated to one of our worthy partner organizations.'
        },
        {id: 5, 
          title: 'Anywhere Fitness',
          description: 'These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.'
        }
        
      ]);
    });
};
