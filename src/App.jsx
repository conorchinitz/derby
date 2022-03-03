import React, { Component } from 'react';

import Header from './components/Header';
import GamesContainer from './containers/GamesContainer';
import GameAdder from './components/GameAdder';

import BoxCover from './assets/santorini-box-cover.webp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'add game',
      form: {
        power1: '',
        power2: '',
        player1: '',
        player2: '',
        winning_power: '',
        winning_player: '',
      }
    };
    this.addGame = this.addGame.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  render() {
    let content;
    switch (this.state.mode) {
      case 'display games': {
        content = <GamesContainer addGame={this.addGame}/>;
        break;
      }
      case 'add game': {
        content = <GameAdder formData={this.state.form} resetForm={this.resetForm}/>;
        break;
      }
    }

    return (
      <div id="app">
        <Header />
        <div id="box-cover-container">
          <img id="box-cover-img" src={BoxCover} alt="The box cover of the game Santorini." />
        </div>
        {content}
      </div>
    );
  }

  addGame() {
    this.setState({ mode: 'add game' });
  }

  displayGames() {
    this.setState( {mode: 'display games' });
  }

  resetForm(e) {
    e.preventDefault();
    this.setState({
      form: {
        power1: '',
        power2: '',
        player1: '',
        player2: '',
        winning_power: '',
        winning_player: '',
      }
    });
  }

  updateForm(e) {
    console.log(e.target.textContent);
  }
}

export default App;