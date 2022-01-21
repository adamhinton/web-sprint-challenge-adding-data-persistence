// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks");
}

const fixBoolean = (items) => {
  items.forEach((item) => {
    item.task_completed === 0
      ? (item.task_completed = false)
      : (item.task_completed = true);
  });
};

module.exports = {
  getTasks,
  fixBoolean,
};
