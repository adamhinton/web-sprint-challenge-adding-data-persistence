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
    item.project_completed === 0
      ? (item.project_completed = false)
      : (item.project_completed = true);
  });
};

async function createProject(project) {
  const [id] = await db("projects").insert(project);
  return getProjectById(id);
}

module.exports = {
  getProjects,
  getProjectById,
  fixBoolean,
  createProject,
};

// const fixBoolean = items =>{
//   items.forEach(item) =>{
//     item.project_completed ? proj.project_completed = true
//     : proj.project_completed = false;
//   }
// }
