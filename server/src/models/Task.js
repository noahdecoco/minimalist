const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema(
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
    collection: "TaskList"
  }
);

module.exports = mongoose.model("Task", Task);