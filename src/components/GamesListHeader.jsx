import React from 'react';

function GamesListHeader(props) {
  return (
    <div id="games-list-header" className="fancy underline">
      {/* This div is intentionally empty to align the column headers correctly. */}
      <div></div>
      <div>Powers</div>
      <div>Players</div>
      <div>Winner</div>
      <div></div>
    </div>
  );
}

export default GamesListHeader;