const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoList = new Schema(
  {
    description: {
      type: String
    },
    priority: {
      type: Number
    },
    weight: {
      type: Number
    },
    completed: {
      type: Boolean
    }
  },
  {
    collection: "Tasks"
  }
);

module.exports = mongoose.model("TodoList", TodoList);
