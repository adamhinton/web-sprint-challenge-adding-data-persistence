const db = require("../../data/dbConfig");
const Task = require("./model");
// const Project = require("../project/model");

const validateTask = (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (!task_description || !project_id) {
    next({ message: "put in a task description and project_id" });
  } else {
    next();
  }
};

const validateProjectId = async (req, res, next) => {
  const project = await db("projects")
    .where("project_id", req.body.project_id)
    .first();
  if (project) {
    next();
  } else {
    res.status(404).json({ message: "Enter a valid project_id" });
  }
};

module.exports = {
  validateTask,
  validateProjectId,
};
