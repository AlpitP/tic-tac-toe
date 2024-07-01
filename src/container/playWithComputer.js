import { useEffect, useState } from "react";
import { TOTAL_BLOCKS } from "../constant";
import { totalPositions } from "../description";

const PlayWithComputer = () => {
  const [selectedPositions, setSelectedPositions] = useState({});
  const [turnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState("");

  const winningCondition = (p1, p2, p3) => {
    if (p1 && p2 && p3 && p1 === p2 && p2 === p3 && p3 === p1) {
      setWinner(p1 === "X" ? `You Won the Match.` : "You Lost Try Again.");
      return true;
    }
  };

  const checkWinner = () => {
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
    } = selectedPositions;
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
  const computerMove = () => {
    const emptyPositions = totalPositions.filter(
      (name) => !selectedPositions[name]
    );
    if (emptyPositions.length === 0 || checkWinner()) return;
    const randomIndex = Math.floor(Math.random() * emptyPositions.length);
    const randomMove = emptyPositions[randomIndex];
    setSelectedPositions((prev) => ({ ...prev, [randomMove]: "O" }));
    setTurnX(true);
  };

  const playerMove = (name) => {
    setSelectedPositions((prev) => prev && { ...prev, [name]: "X" });
    setTurnX(!turnX);
  };

  useEffect(() => {
    if (Object.keys(selectedPositions).length === TOTAL_BLOCKS) {
      setWinner("Match Tie.");
    }
    checkWinner();
    if (!turnX) computerMove();
  }, [selectedPositions]);

  const reStart = () => {
    setSelectedPositions({});
    setWinner("");
    setTurnX(true);
  };
  return { winner, playerMove, selectedPositions, reStart };
};

export default PlayWithComputer;
