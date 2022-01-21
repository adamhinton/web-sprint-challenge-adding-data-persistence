const db = require("../../data/dbConfig");
const Task = require("./model");

module.exports = {
  validateTask(req, res, next) {
    const { task_description, project_id } = req.body;

    if (!req.body.task_description || !req.body.project_id) {
      next({ message: "put in a task description and project_id" });
    } else {
      next();
    }
  },
};
