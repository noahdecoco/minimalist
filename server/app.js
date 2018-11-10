const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoListRoutes = require("./src/routes/routes");

const basePath = "/api";
const port = 6200;

mongoose
  .connect("mongodb://mongodb")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch(err => {
    console.error("Backend error:", err.stack);
    process.exit(1);
  });

const app = express()
  .use(express.static("public"))
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(basePath, todoListRoutes);

app.listen(port, () => console.log("TodoList Backend running on Port: ", port));
