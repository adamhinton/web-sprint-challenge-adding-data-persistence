// build your `Resource` model here
// build your `Project` model here
const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

async function getResourceById(resource_id) {
  const resourceRows = await db("resources")
    .select()
    .where("resource_id", resource_id);

  return resourceRows;
}

async function createResource(resource) {
  const [id] = await db("resources").insert(resource);
  return getResourceById(id);
}

module.exports = {
  getResources,
  getResourceById,
  createResource,
};
