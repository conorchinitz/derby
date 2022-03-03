import React from 'react';

function Game(props) {
  return (
    <div className="game">
      <div>
        <p>Game #{props.game_id}</p>
      </div>
      <div className="powers">
        <p>{props.power1}</p>
        <p>vs.</p>
        <p>{props.power2}</p>
      </div>
      <div className="players">
        <p>({props.player1}</p>
        <p>vs.</p>
        <p>{props.player2})</p>
      </div>
      <div className="winner">
        <p>{props.winning_power}</p>
        <p>{props.winning_player}</p>
      </div>
    </div>
  );
}

export default Game;