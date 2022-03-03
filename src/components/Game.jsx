import React from 'react';

function Game(props) {
  return (
    <div className="game">
      <div>
        <p>Game #{props.game_id}</p>
      </div>
      <div className="powers">
        <p className="clickable">{props.power1}</p>
        <p>vs.</p>
        <p className="clickable">{props.power2}</p>
      </div>
      <div className="players">
        <p className="clickable">({props.player1}</p>
        <p>vs.</p>
        <p className="clickable">{props.player2})</p>
      </div>
      <div className="winner">
        <p className="clickable">{props.winning_power}</p>
        <p className="clickable">{props.winning_player}</p>
      </div>
    </div>
  );
}

export default Game;