// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");
const { validateTask, validateProjectId } = require("./tasks-middleware");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      Task.fixBoolean(tasks);
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", validateTask, validateProjectId, (req, res, next) => {
  //   res.json({ message: "posting to tasks" });
  console.log("posting");
  Task.createTask(req.body).then((newTask) => {
    Task.fixBoolean(newTask);
    res.status(201).json(newTask[0]);
  });
});

module.exports = router;
