// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

async function getProjectById(project_id) {
  const projectRows = await db("projects")
    .select()
    .where("project_id", project_id);

  return projectRows;
}

const fixBoolean = (items) => {
  items.forEach((item) => {
    item.project_completed
      ? (item.project_completed = true)
      : (item.project_completed = false);
  });
};

module.exports = {
  getProjects,
  getProjectById,
  fixBoolean,
};

// const fixBoolean = items =>{
//   items.forEach(item) =>{
//     item.project_completed ? proj.project_completed = true
//     : proj.project_completed = false;
//   }
// }
