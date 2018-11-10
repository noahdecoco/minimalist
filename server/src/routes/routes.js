const express = require("express");
const Task = require("../models/Task");

const app = express();
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Task.find((error, tasks) =>
      error ? res.send(error) : res.json(tasks)
    );
  })
  .post((req, res) => {
    const item = new Task(req.body);
    item
      .save()
      .then(item => res.json(item))
      .catch(error => res.status(400).send(error));
  });

router
  .route("/:id")
  .put((req, res) => {
    Task.findById(req.params.id, (error, item) => {
      if (!item) {
        res.status(400).send("no item");
      } else {
        Object.assign(item, req.body);
        item
          .save()
          .then(item => res.json(item))
          .catch(err => res.status(400).send("unable to update the database"));
      }
    });
  })
  .delete((req, res) => {
    Task.findByIdAndRemove({ _id: req.params.id }, (error, item) =>
      error ? res.json(err) : res.json(item)
    );
  });

module.exports = router;
