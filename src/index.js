import './style.css';
// import BoxCover from './santorini-box-cover.png';
import BoxCover from './santorini-box-cover.webp';

document.addEventListener('DOMContentLoaded', function main(){
  const header = document.createElement('h1');
  header.innerText = 'Welcome to Derby';
  document.body.append(header);

  const boxCover = new Image();
  boxCover.src = BoxCover;

  document.body.append(boxCover);

  fetch('/games/all')
    .then(data => data.json())
    .then(data => {
      data.forEach((game) => {
        const { game_id, power1, power2, winning_power, player1, player2, winning_player } = game;
        
        const gameDiv = document.createElement('div');
        const gameInfo = document.createElement('p');

        gameInfo.innerText = 
          `Game #${game_id}
          ${power1} vs. ${power2}
          (${player1} vs. ${player2})
          Winner: ${winning_power} (${winning_player})`;

          gameDiv.append(gameInfo);
          document.body.append(gameDiv);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
