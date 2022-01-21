const projects = [
  {
    project_name: "Beat up little kids",
    project_description: "Take all their lunch money",
    project_completed: false,
  },
  {
    project_name: "Run away from home",
    project_description: "Take all my parents' stuff too",
    project_completed: false,
  },
  {
    project_name: "Rob a bank",
    project_description: "Beat up tellers",
    project_completed: false,
  },
];

const resources = [
  { resource_name: "judo classes", resource_description: "take judo classes" },
  {
    resource_name: "fake dummies",
    resource_description: "need to acquire this",
  },
  { resource_name: "ski masks", resource_description: "disguise" },
];

const tasks = [
  {
    task_description: "find nearest little kid",
    task_notes: "beat up said little kid",
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: "sneak out of house",
    task_notes: "do it quiet",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "Get evil money bag",
    task_notes: "Use to rob bank",
    task_completed: false,
    project_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
};
