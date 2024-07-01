import React from "react";
import PlayWithComputer from "../container/playWithComputer";
import Button from "../shared/Button";
import TicTacTerBoard from "./TicTacTerBoard";

const TicTacToeBot = () => {
  const { winner, playerMove, selectedPositions, reStart } = PlayWithComputer();
  return (
    <div>
      {winner && <h3>Game Over.</h3>}
      <TicTacTerBoard
        selectedPositions={selectedPositions}
        winner={winner}
        clickHandler={playerMove}
        player="X"
      />
      {<Button onClick={reStart}>{winner ? "Play Again" : "Restart"}</Button>}
    </div>
  );
};

export default TicTacToeBot;
