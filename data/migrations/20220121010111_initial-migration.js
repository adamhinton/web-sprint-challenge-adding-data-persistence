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

  await knex.schema.createTable("tasks", (table) => {
    table.increments("task_id");
    table.string("task_description").notNullable();
    table.string("task_notes");
    table.boolean("task_completed").defaultTo(0);
    //foreign key now
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project_id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT");
  });

  //joining comes in the model, not here

  // await knex.schema.createTable("", (table) => {});
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
