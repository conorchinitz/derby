const express = require('express');
const gamesController = require('./controllers/gamesController.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.get('/games/all', gamesController.getGames, (req, res) => {
  res.status(200).json(res.locals.games);
});

app.use('/post', gamesController.addGame, (req, res) => {
  res.redirect('/');
});

app.get('/games/:filter', gamesController.filterGames, (req, res) => {
  res.status(200).json(res.locals.games);
});

app.use('*', (req, res) => {
  res.status(404).send('Not found.');
});


// Global error-handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('ERROR');
});


app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

module.exports = app;