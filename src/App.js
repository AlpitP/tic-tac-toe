import { useState } from "react";
import "./App.css";
import SinglePlayer from "./component/SinglePlayer";
import TicTacToe from "./component/TicTacToe";
import Button from "./shared/Button";

function App() {
  const [gameType, setGameType] = useState("");

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      {!gameType && (
        <>
          <Button
            onClick={() => setGameType("twoPlayer")}
            style={{ fontSize: 20, margin: 20, padding: 10 }}
          >
            2 player
          </Button>
          <Button
            onClick={() => setGameType("computer")}
            style={{ fontSize: 20, padding: 10 }}
          >
            Computer
          </Button>
        </>
      )}
      {gameType === "twoPlayer" && <TicTacToe />}
      {gameType === "computer" && <SinglePlayer />}
    </div>
  );
}

export default App;
