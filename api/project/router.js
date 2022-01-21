const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      Project.fixBoolean(projects);
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res) => {
  Project.createProject(req.body)
    .then((newProject) => {
      Project.fixBoolean(newProject);
      res.status(201).json(newProject[0]);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
