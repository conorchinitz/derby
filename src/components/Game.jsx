/* eslint-disable react/prop-types */
import React from 'react';

function Game(props) {
  return (
    <div className="game">
      <div>
        <p className="secondary">Game #{props.game_id}</p>
      </div>
      <div className="powers">
        <p className="clickable" onClick={() => props.handleClick(props.power1)}>{props.power1}</p>
        <p className="secondary">vs.</p>
        <p className="clickable" onClick={() => props.handleClick(props.power2)}>{props.power2}</p>
      </div>
      <div className="players">
        <p className="clickable" onClick={() => props.handleClick(props.player1)}>({props.player1}</p>
        <p className="secondary">vs.</p>
        <p className="clickable" onClick={() => props.handleClick(props.player2)}>{props.player2})</p>
      </div>
      <div className="winner">
        <p className="clickable" onClick={() => props.handleClick(props.winning_power)}>{props.winning_power}</p>
        <p className="clickable" onClick={() => props.handleClick(props.winning_player)}>{props.winning_player}</p>
      </div>
    </div>
  );
}

export default Game;