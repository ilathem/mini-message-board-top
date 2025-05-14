// initialize app
const express = require('express');
const app = express();

// import routes
const indexRouter = require('./route/indexRouter');

// setup ejs
const path = require('node:path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configure routes
app.use('/', indexRouter);

// initialize app
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
