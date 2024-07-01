import React from "react";
import { totalPositions } from "../description";
import Button from "../shared/Button";

const TicTacTerBoard = ({
  clickHandler,
  selectedPositions,
  winner,
  player,
}) => {
  return (
    <>
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
              name={ele}
              style={{ height: 60, margin: 10, width: 60, fontSize: 20 }}
              onClick={() => clickHandler(ele)}
              disabled={selectedPositions[ele] || winner || !player}
            >
              {selectedPositions[ele]}
            </Button>
          );
        })}
      </div>
      <h3>{winner}</h3>
    </>
  );
};

export default TicTacTerBoard;
