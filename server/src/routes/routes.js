const express = require("express");
const TodoList = require("../models/TodoList");

const app = express();
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    TodoList.find(
      (error, tasks) => (error ? res.send(error) : res.json(tasks))
    );
  })
  .post((req, res) => {
    const item = new TodoList(req.body);
    item
      .save()
      .then(item => res.json(item))
      .catch(error => res.status(400).send(error));
  });

router
  .route("/:id")
  .put((req, res) => {
    TodoList.findById(req.params.id, (error, item) => {
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
    TodoList.findByIdAndRemove(
      { _id: req.params.id },
      (error, item) => (error ? res.json(err) : res.json(item))
    );
  });

module.exports = router;
