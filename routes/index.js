var express = require("express");
var router = express.Router();

const messages = [
  {
    title: "Hi there!",
    text: "You can do this!",
    author: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    title: "Hello World!",
    text: "Let's start programming together",
    author: "Sara",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Message Board", messages: messages });
  next();
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Message Board" });
});

router.post("/new", (req, res) => {
  const newMessage = {
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
