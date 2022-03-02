const db = require('../postgres-pool.js');

const gamesController = {
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
};

module.exports = gamesController;