const db = require('../postgres-pool.js');
const queries = require('../queries/queries.js');

const gamesController = {
  // Display all games in the database.
  getGames: async function getGames(req, res, next) {
    // console.log('Get games.');

    const text = 'SELECT * FROM all_games';

    try {
      // console.log('try');
      const games = await db.query(text);
      res.locals.games = games.rows;
      return next();
    } catch (err) {
      console.log('gamesController.getGames: ERROR');
      console.log(err);
      return next(err);
    }

  },

  // Add a new game to the database.
  addGame: async function addGame(req, res, next) {
    console.log('Add game.');
    const { power1, power2, player1, player2, winning_power, winning_player } = req.body;

    const text = queries.getIds;
    const params = [power1, power2, player1, player2, winning_power, winning_player];

    try {
      const data = await db.query(text, params);
      res.locals.addedGame = data.rows[0];

      const { power1, power2, player1, player2, winning_power, winning_player } = data.rows[0];

      const addText =
      `INSERT INTO games (power1, power2, player1, player2, winning_power, winning_player)
      VALUES ($1 , $2, $3, $4, $5, $6);`;

      const addParams = [power1, power2, player1, player2, winning_power, winning_player];

      await db.query(addText, addParams);

      return next();
    } catch (err) {
      console.log('gamesController.addGame: ERROR');
      console.log(err);
      return next(err);
    }
  },

  // Return a filtered list of games based on a specified player or power.
  filterGames: async function filterGames(req, res, next) {
    const text = queries.filterGames;
    const params = [req.params.filter];

    try {
      const data = await db.query(text, params);
      res.locals.games = data.rows;
      return next();
    } catch (err) {
      console.log('gamesController.filterGames: ERROR');
      console.log(err);
      return next(err);
    }
  }
};

module.exports = gamesController;