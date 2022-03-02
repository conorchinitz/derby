import React from 'react';

function Game(props) {
  return (
    <div className="game">
      <p>{`Game #${props.game_id}`}</p>
      <p>{`${props.power1} vs. ${props.power2}`}</p>
      <p>{` (${props.player1} vs. ${props.player2})`}</p>
      <p>{`Winner: ${props.winning_power} (${props.winning_player})`}</p>
    </div>
  );
}

export default Game;