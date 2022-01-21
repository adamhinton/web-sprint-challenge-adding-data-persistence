const express = require("express");
const Resource = require("./model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resource.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource[0]);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
