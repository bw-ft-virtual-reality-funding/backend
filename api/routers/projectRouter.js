const router = require("express").Router();
const Projects = require('../models/projectModel');

router.get("/", (req, res) => {
    Projects.find()
      .then((projects) => {
        res.json(projects);
      })
      .catch((err) => res.send(err));
  });

module.exports = router;

