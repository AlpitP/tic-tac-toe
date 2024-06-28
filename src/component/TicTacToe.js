import React, { useEffect, useState } from "react";
import { TOTAL_BLOCKS } from "../constant";
import { totalPositions } from "../description";
import Button from "../shared/Button";

const TicTacToe = () => {
  const [selectedPositions, setSelectedPositions] = useState({});
  const [turnX, setTurnX] = useState(false);
  const [player, setPlayer] = useState("");
  const [winner, setWinner] = useState("");

  const winningCondition = (p1, p2, p3) => {
    if (p1 && p2 && p3 && p1 === p2 && p2 === p3 && p3 === p1) {
      setWinner(`Winner is Player ${p1}.`);
      return true;
    }
  };

  const checkWinner = (lastPosition) => {
    const cloneSelectedPositions = { ...selectedPositions };
    const positions = Object.keys(selectedPositions)
      .map((ele) => +ele.at(-1))
      .sort();
    if (positions.length === TOTAL_BLOCKS - 1) {
      for (let i = 1; i <= TOTAL_BLOCKS; i++) {
        if (positions[i - 1] !== i) {
          cloneSelectedPositions[`position${i}`] = lastPosition;
          break;
        }
      }
    }
    const {
      position1,
      position2,
      position3,
      position4,
      position5,
      position6,
      position7,
      position8,
      position9,
    } = cloneSelectedPositions;

    return (
      winningCondition(position1, position2, position3) ||
      winningCondition(position4, position5, position6) ||
      winningCondition(position7, position8, position9) ||
      winningCondition(position1, position4, position7) ||
      winningCondition(position2, position5, position8) ||
      winningCondition(position3, position6, position9) ||
      winningCondition(position1, position5, position9) ||
      winningCondition(position3, position5, position7)
    );
  };

  const clickHandler = (name) => {
    setSelectedPositions(
      (prev) => prev && { ...prev, [name]: turnX ? "X" : "O" }
    );
    setTurnX(!turnX);
  };
  useEffect(() => {
    if (Object.keys(selectedPositions).length === TOTAL_BLOCKS - 1) {
      if (checkWinner(turnX ? "X" : "O")) {
        setWinner("");
      } else {
        setWinner("Match Tie.");
      }
    }
    checkWinner();
  }, [selectedPositions]);

  const clear = () => {
    setSelectedPositions({});
    setWinner("");
    setPlayer(false);
    setTurnX(false);
  };
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: 100,
          marginLeft: "41%",
        }}
      >
        {totalPositions.map((ele, index) => {
          return (
            <Button
              key={index}
              name={ele.name}
              style={{ height: 60, margin: 10, width: 60, fontSize: 20 }}
              onClick={() => clickHandler(ele.name)}
              disabled={selectedPositions[ele.name] || winner || !player}
            >
              {selectedPositions[ele.name]}
            </Button>
          );
        })}
      </div>
      <h3>{winner}</h3>
      {player && (
        <Button onClick={clear}>{winner ? "Play Again" : "Restart"}</Button>
      )}
    </div>
  );
};

export default TicTacToe;
