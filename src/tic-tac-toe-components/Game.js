import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquare = history[history.length - 1]

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
    
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

    // console.log(his)
  return (
      <div className="game">
      <div className="game-board">
              <Board xIsNext={ xIsNext} squares={currentSquare} onPlay = {handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves.map(li => li)}</ol>
      </div>
    </div>
  )
}

export default Game