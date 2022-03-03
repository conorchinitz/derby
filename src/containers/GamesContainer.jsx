import React from 'react';
import Game from '../components/Game';

class GamesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  render() {
    return(
      <div id="games-container">
        <p>Hello, here is a list of games.</p>
        <div id="games-list">
          {this.state.games.map((game) => {
            const { game_id, power1, power2, player1, player2, winning_power, winning_player } = game;
            return <Game
              key = {game_id.toString()}
              game_id = {game_id}
              power1 = {power1}
              power2 = {power2}
              player1 = {player1}
              player2 = {player2}
              winning_power = {winning_power}
              winning_player = {winning_player}
            />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('mounted');
    fetch('/games/all')
      .then(data => data.json())
      .then(data => this.setState({ games: data }));
  }

}

export { GamesContainer };