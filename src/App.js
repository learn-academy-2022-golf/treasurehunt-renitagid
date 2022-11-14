import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square";

const App = () => {
  const origArray = ["🟫", "🟫", "🟫", "🟫", "🟫", "🟫", "🟫", "🟫", "🟫"];

  const [board, setBoard] = useState(origArray);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const reset = () => {
    setBoard(origArray);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
  };

  const handleGamePlay = (index) => {
    //alert(index);
    let updatedBoard = [...board];
    if (index === treasureLocation) {
      updatedBoard[index] = "🏁";
    } else if (index === bombLocation) {
      updatedBoard[index] = "🕳";
    } else {
      updatedBoard[index] = "🐾";
    }
    setBoard(updatedBoard);
  };

  return (
    <>
      <h1>Get to the Finish Line and Don't Fall in a Hole</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <Button reset={reset} />
    </>
  );
};

export default App;
