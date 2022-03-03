const queries = {
  getIds:
  `SELECT
    pow1.id AS power1,
    pow1.name AS power1_name,
    pow2.id AS power2,
    pow2.name AS power2_name,
    win_pow.id AS winning_power,
    win_pow.name AS winning_power_name,
    p1.id AS player1,
    p1.name AS p1_name,
    p2.id AS player2,
    p2.name AS p2_name,
    winner.id AS winning_player,
    winner.name AS winning_player_name

  FROM powers pow1

  INNER JOIN powers pow2
    ON pow2.name = $2
  INNER JOIN players p1
    ON p1.name = $3
  INNER JOIN players p2
    ON p2.name = $4
  INNER JOIN powers win_pow
    ON win_pow.name = $5
  INNER JOIN players winner
    ON winner.name = $6

  WHERE
  pow1.name = $1;`,
};


module.exports = queries;