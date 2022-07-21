const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//links static files (images, css, DOM js files) to the server
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

//links ejs files to server
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views'));


//get pages
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/pt/', (req, res) => {
  res.render('pt/index.ejs')
})

app.get('/our-home', (req, res) => {
  res.render('our-home.ejs')
})

app.get('/experiences', (req, res) => {
  res.render('experiences.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.get('/stay', (req, res) => {
  res.render('contact.ejs')
})

app.get('/things-to-do', (req, res) => {
  res.render('things-to-do.ejs')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});

