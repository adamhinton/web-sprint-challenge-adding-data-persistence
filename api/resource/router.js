// build your `/api/resources` router here
const express = require("express");
const helpers = require("./model");

const router = require("express").Router();

// const server = express();
// server.use(express.json());

router.post("/", (req, res, next) => {
  //   helpers
  //     .createResource(req.body)
  //     .then((resource) => {
  //       res.status.json(resource);
  //     })
  //     .catch(next);
  console.log("post");
  res.json({ message: "test" });
});

module.exports = router;
