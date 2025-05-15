// use Router from express
const { Router } = require('express');

// import the data
const messages = require('../db');

// instantiate the router
const indexRouter = Router();

// tell the router to display the template
indexRouter.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Messenger',
    messages: messages,
  });
});

// export the router
module.exports = indexRouter;
