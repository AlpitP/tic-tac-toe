import { useEffect, useState } from "react";
import { TOTAL_BLOCKS } from "../constant";
import { totalPositions } from "../description";

const TwoPlayer = () => {
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
    const emptyPosition = totalPositions.filter(
      (name) => !selectedPositions[name]
    );
    lastPosition && (cloneSelectedPositions[emptyPosition] = lastPosition);

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

  const reStart = () => {
    setSelectedPositions({});
    setWinner("");
    setPlayer(false);
    setTurnX(false);
  };
  return {
    player,
    winner,
    turnX,
    setPlayer,
    setTurnX,
    clickHandler,
    reStart,
    selectedPositions,
  };
};

export default TwoPlayer;
