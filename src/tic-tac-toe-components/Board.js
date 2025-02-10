import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])

  function handleClick(id) {
    const newSquares = structuredClone(history[history.length - 1])
    newSquares[id] = 'x'
    setHistory(prev => [...prev, newSquares])
  }

  console.log(history)
 
  return (
    <div className='board'>
      {
        history[0].map((value, index, arr) => { 
          // console.log(value)
          // console.log(arr)
          return <Square value={ value} onSquareClick={()=> handleClick(index)} key={index}/>
        })
      }
    </div>
  )
}

export default Board