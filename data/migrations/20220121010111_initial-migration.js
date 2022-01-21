exports.up = async function (knex) {
  await Promise.resolve("up");
};

exports.down = function (knex) {
  return Promise.resolve("down");
};
