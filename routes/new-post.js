const express = require("express");
const router = express.Router();

const messages = require("../data");

router.get("/", (req, res) => {
  res.status(200).render("new-post", { error: false });
});

router.post("/", (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res
      .status(400)
      .render("new-post", { error: "please fill required fields" });
  }
  messages.push({ name: name, message: message, time: new Date() });
  res.redirect("/");
});

module.exports = router;
