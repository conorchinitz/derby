const express = require('express');
const gamesController = require('./controllers/gamesController.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', gamesController.getGames, (req, res) => {
  res.status(200).json(res.locals.games);
})



// Global error-handler
app.use((err, req, res, next) => {
  res.send('ERROR');
})


app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

module.exports = app;