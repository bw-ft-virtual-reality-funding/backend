const router = require("express").Router();
const Projects = require('../models/projectModel');


router.get("/", (req, res) => {
    Projects.find()
      .then((projects) => {
        res.json(projects);
      })
      .catch((err) => res.send(err));
  });

  router.post('/', (req, res) => {
      let project = req.body;
      const {title, description} = req.body;

      if (title && description) {
          Projects.add(project)
          .then(project => {
              res.status(201).json(project);
          })
          .catch(err => {
              res.status(500).json({err: err});
          })
      } else {
          res.status(400).json({msg: "Please provide project title and description"});
      }
  })
  
  router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
      .then(project => {
          if (project){
            res.status(200).json(project);
          } else {
              res.status(400).json({msg: "No project found by that ID."})
          }
    
      })
      .catch(error => 
        res.status(500).send(error.message));
  });
  
  router.put('/:id', (req, res) => {
    let project = req.body;
    let id = req.params.id;
    Projects.update(project, id)
      .then(updated => {
        if (updated) {
          res.status(200).json({ message: 'Updated project.' });
        } else {
          res.status(404).json({ message: 'Could not update project.' });
        }
      }) 
      .catch(error =>
        res.status(500).send(error));
  });
  
  router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
      .then(deleted => {
        if (deleted) {
          res.status(200).json({ message: 'Deleted project.' });
        } else {
          res.status(404).json({ message: 'Could not delete project.' });
        }
      })
      .catch(error => 
        res.status(500).json(error));
  });

module.exports = router;

