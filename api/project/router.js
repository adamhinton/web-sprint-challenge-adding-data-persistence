// import { types } from "pg";
// types.setTypeParser(16, (value) => {
//   // 16 is the type enum vaue of boolean
//   return Boolean(parseInt(value));
// });

// build your `/api/projects` router here
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

router.post("/", (req, res, next) => {
  Project.create(req.body)
    .then((newProject) => {
      Project.fixBoolean(newProject);
      // this.delete(newProject.project_id);
      res.status(201).json(newProject[0]);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
