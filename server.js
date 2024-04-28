// Package Dependencies
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection.js");

// Load environment variables
require("dotenv").config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

db.once("open", () => {
  app.listen(port, () => {
    console.log(`Express server listening to port ${port}`);
  });
});
