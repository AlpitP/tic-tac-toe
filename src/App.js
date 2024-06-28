import { useState } from "react";
import "./App.css";
import TicTacToe from "./component/TicTacToe";
import Button from "./shared/Button";
import TicTacToeBot from "./component/TicTacToeBot";

function App() {
  const [gameType, setGameType] = useState("");
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      {!gameType && (
        <>
          <Button
            onClick={() => setGameType("twoPlayer")}
            style={{ fontSize: 20, margin: 20 }}
          >
            2 player
          </Button>
          <Button onClick={() => setGameType("bot")} style={{ fontSize: 20 }}>
            Bot
          </Button>
        </>
      )}
      {gameType === "twoPlayer" && <TicTacToe />}
      {gameType === "bot" && <TicTacToeBot />}
    </div>
  );
}

export default App;
