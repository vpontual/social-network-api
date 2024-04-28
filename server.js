const express = require("express");
const router = require("./routes");
const db = require("./config/connection.js");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

db.once("open", () => {
  app.listen(port, () => {
    console.log(`Express server listening to port ${port}`);
  });
});
