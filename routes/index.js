const express = require("express");
const router = express.Router();

const messages = require("../data");

router.get("/", (req, res) => {
  res.status(200).render("index", { messages });
});

module.exports = router;
