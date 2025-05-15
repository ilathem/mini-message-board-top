// initialize app
const express = require('express');
const app = express();

// needed to parse the form data into the request
app.use(express.urlencoded({ extended: true }));

// import routes
const indexRouter = require('./route/indexRouter');
const newMessageRouter = require('./route/newMessageRouter');

// setup ejs
const path = require('node:path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configure routes
app.use('/', indexRouter);
app.use('/new', newMessageRouter);

// initialize app
app.listen(8000, () => {
  console.log('Listening on port 8000');
});
