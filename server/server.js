const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Congrats, you\'re using Derby!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

module.exports = app;