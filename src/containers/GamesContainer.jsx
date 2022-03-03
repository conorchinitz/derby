import React, { Component } from 'react';
import GamesListHeader from '../components/GamesListHeader';
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
        <p className="content-fontsize">
          You are viewing a filtered list of games.{' '}
          <span className="link" onClick={this.viewAllGames}>
            Click here
          </span> to view all games.</p>;
    } else {
      message =
      <div>
        <p>Hello. Here are the most recent game results.</p>
        <p className="content-fontsize">Click a power or player name to filter the results.</p>
        <p className="content-fontsize">Or <span className="link">click here</span> to add a new game result.</p>
      </div>;
    }

    return(
      <div id="games-container">
        {message}
        <div id="games-list">
          <GamesListHeader />
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