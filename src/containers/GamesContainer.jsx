import React, { Component } from 'react';
import Game from '../components/Game';

class GamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      filtered: false,
    };

    this.filterGames = this.filterGames.bind(this);
    this.viewAllGames = this.viewAllGames.bind(this);
  }

  render() {
    let message;
    if (this.state.filtered) {
      message =
        <p id="filter-warning">
          You are viewing a filtered list of games.{' '}
          <span className="link" onClick={this.viewAllGames}>
            Click here
          </span> to view all games again.</p>;
    } else {
      message = <p>Hello. Here are the most recent game results.</p>;
    }

    return(
      <div id="games-container">
        {message}
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
              handleClick = {this.filterGames}
            />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    return this.viewAllGames();
  }

  viewAllGames() {
    return fetch('/games/all')
      .then(data => data.json())
      .then(data => this.setState({ games: data, filtered: false }))
      .catch(err => console.log(err));
  }

  filterGames(filter) {
    return fetch(`/games/${filter}`)
      .then(data => data.json())
      .then(data => this.setState({ games: data, filtered: true }))
      .catch(err => console.log(err));
  }
}

export { GamesContainer };