const express = require('express');
const hbs = require('hbs');
const config = require('./config');
const EOL = require('os').EOL;

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getFullYear', () => new Date().getFullYear());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.hbs', {
    theme: 'Vasya'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    theme: 'Petya'
  });
})

app.get('/bad', (req, res) => {
  res.send({
    status: 500,
    error: 'Fuck the police'
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
