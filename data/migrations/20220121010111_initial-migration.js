exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("project_id");
    table.string("project_name", 200).notNullable().unique();
    table.string("project_description", 200);
    table.boolean("project_completed").defaultTo(0);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};
