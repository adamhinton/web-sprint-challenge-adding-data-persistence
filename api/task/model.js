// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks");
}

async function getTaskById(task_id) {
  const taskRows = await db("tasks").select().where("task_id", task_id);

  return taskRows;
}

const fixBoolean = (items) => {
  items.forEach((item) => {
    item.task_completed === 0
      ? (item.task_completed = false)
      : (item.task_completed = true);
  });
};

async function createTask(task) {
  const [id] = await db("tasks").insert(task);
  return getTaskById(id);
}

module.exports = {
  getTasks,
  getTaskById,
  fixBoolean,
  createTask,
};
