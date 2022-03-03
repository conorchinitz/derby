import React, { Component } from 'react';

class GameAdder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="game-adder">
        <form action="post" autoComplete="off">
          <label htmlFor="power1">Power 1</label>
          <input id="power1" name="power1" type="text" autoFocus/>
          <label htmlFor="power2">Power 2</label>
          <input id="power2" name="power2" type="text" />
          <label htmlFor="player1">Player 1</label>
          <input id="player1" name="player1" type="text" />
          <label htmlFor="player2">Player 2</label>
          <input id="player2" name="player2" type="text" />
          <label htmlFor="winning_power">Winning Power</label>
          <input id="winning_power" name="winning_power" type="text" />
          <label htmlFor="winning_player">Winning Player</label>
          <input id="winning_player" name="winning_player" type="text" />
          <div id="game-adder-buttons">
            <button id="start-over" onClick={this.props.resetForm}>Never Mind</button>
            <button type="submit">Submit !</button>
          </div>
        </form>

      </div>
    );
  }
}


export default GameAdder;