exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("project_id");
    table.string("project_name", 200).notNullable();
    table.string("project_description", 200);
    table.boolean("project_completed").defaultTo(0);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("resource_id");
    table.string("resource name", 35).notNullable().unique();
    table.string("resource_description", 200);
  });

  // await knex.schema.createTable("", (table) => {});

  // await knex.schema.createTable("", (table) => {});
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};
