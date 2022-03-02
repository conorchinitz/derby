import React, { Component } from 'react';
import BoxCover from './santorini-box-cover.webp';
import { GamesList } from './components/GamesList.jsx';

function App(props) {
    return (
      <div id="app">
        <h1 id="welcome">Welcome to Derby!</h1>
        <img id="box-cover-img" src={BoxCover} alt="The box cover of the game Santorini." />
        <GamesList />
      </div>
    );
}

export default App;