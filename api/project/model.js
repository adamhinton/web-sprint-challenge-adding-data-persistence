// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjectById(project_id) {
  const projectRows = await db("projects").where("project_id", project_id);

  return projectRows;
}

module.exports = {
  getProjectById,
};
