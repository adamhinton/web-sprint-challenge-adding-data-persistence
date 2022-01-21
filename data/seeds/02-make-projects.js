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

const resources = [{ resource }];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
};
