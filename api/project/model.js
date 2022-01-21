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

//changes API boolean from 0 to false and from 1 to true
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
