import React from 'react';

import Header from './components/Header';
import { GamesContainer } from './containers/GamesContainer';

import BoxCover from './assets/santorini-box-cover.webp';

function App() {
  return (
    <div id="app">
      <Header />
      <img id="box-cover-img" src={BoxCover} alt="The box cover of the game Santorini." />
      <GamesContainer />
    </div>
  );
}

export default App;