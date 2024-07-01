import React from "react";
import TwoPlayer from "../container/twoPlayer";
import Button from "../shared/Button";
import TicTacTerBoard from "./TicTacTerBoard";

const TicTacToe = () => {
  const {
    player,
    winner,
    turnX,
    setPlayer,
    setTurnX,
    clickHandler,
    reStart,
    selectedPositions,
  } = TwoPlayer();

  return (
    <div>
      {!player && (
        <div>
          <h4>Select X or O</h4>
          <Button
            onClick={() => {
              setPlayer("X");
              setTurnX(true);
            }}
            style={{ marginRight: 10 }}
          >
            X
          </Button>
          <Button
            onClick={() => {
              setPlayer("O");
            }}
          >
            O
          </Button>
        </div>
      )}
      {winner ? (
        <h3>Game Over.</h3>
      ) : (
        player && <h3>Turn:- Player {turnX ? "X" : "O"}</h3>
      )}
      <TicTacTerBoard
        selectedPositions={selectedPositions}
        winner={winner}
        player={player}
        clickHandler={clickHandler}
      />
      {player && (
        <Button onClick={reStart}>{winner ? "Play Again" : "Restart"}</Button>
      )}
    </div>
  );
};

export default TicTacToe;
