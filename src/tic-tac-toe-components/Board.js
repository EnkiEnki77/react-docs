import React, { useState } from 'react'
import Square from './Square'

function Board({ xIsNext, squares, onPlay }) {
  const [winningSquares, setWinningSquares] = useState([])
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        return [squares[a].value, [a,b,c]];
      }
    }

    return null;
  }
  
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      // console.log('I won ')
      // if (calculateWinner(squares)) {
      //   let winningSquaresIndices = calculateWinner(squares)[1]
      //   console.log(winningSquaresIndices)
      // }
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner.value) {
    // let 
    status = 'Winner: ' + winner[0];
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
   
      <div className='board'>
        {
          squares.map((obj, index) => {
            return <Square value={obj.value} onSquareClick={() => handleClick(index)} key={index} />
          })
        }
          
        </div>
    </>
  );
}

export default Board