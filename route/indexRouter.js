// use Router from express
const { Router } = require("express");

// instantiate the router
const indexRouter = Router();

// sample data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// tell the router to display the template
indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messenger",
    messages: messages,
  });
});

// export the router
module.exports = indexRouter;
