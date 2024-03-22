const express = require("express");
const path = require("path");
const logger = require("morgan");

const indexRoute = require("./routes/index");
const newRoute = require("./routes/new-post");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoute);
app.use("/new", newRoute);

app.get("*", (req, res) => {
  res.status(404).render("404");
});

module.exports = app;
