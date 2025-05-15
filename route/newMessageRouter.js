const { Router } = require('express');

// import the data
const messages = require('../db');

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.render('newMessage');
});

newMessageRouter.post('/', (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect('/');
});

module.exports = newMessageRouter;
