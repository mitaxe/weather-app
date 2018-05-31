const express = require('express');
const hbs = require('hbs');
const config = require('./config');
const globals = require('./constants/globals');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.locals.headerStructure = globals.headerStructure;
  next();
})

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/home', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About'
  });
});

app.get('/donate', (req, res) => {
  res.render('donate.hbs', {
    pageTitle: 'Donate'
  });
});

app.get('/support', (req, res) => {
  res.render('support.hbs', {
    pageTitle: 'Support'
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});


module.exports.app = app;
