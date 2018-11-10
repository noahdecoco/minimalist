const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoList = new Schema(
  {
    values: {
      type: String
    },
    description: {
      type: String
    },
    notes: {
      type: String
    },
    priority: {
      type: Number
    },
    effort: {
      type: Number
    },
    isCompleted: {
      type: Boolean
    },
    createdAt: {
      type: String
    }
  },
  {
    collection: "Tasks"
  }
);

module.exports = mongoose.model("TodoList", TodoList);