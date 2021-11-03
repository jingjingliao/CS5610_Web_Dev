import Square from "./Square";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const [boardState, setBoard] = useState([
    ["", ""],
    ["", ""],
  ]);

  const boardComponent = [];
  let count = 0;

  for (let i = 0; i < boardState.length; i++) {
    let row = boardState[i];
    for (let j = 0; j < row.length; j++) {
      boardComponent.push(
        <Square
          symbol={boardState[i][j]}
          onClick={setBoard}
          boardState={boardState}
          x={i}
          y={j}
        />
      );
      if (boardState[i][j] === "X") {
        count++;
      }
    }
  }

  return (
    <div>
      <div class="count">Count: {count}</div>
      <div id="board">{boardComponent}</div>
    </div>
  );
}
