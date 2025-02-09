import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  // console.log(history)
  return (
    <div className='board'>
      {
        history[0].map((value, index, arr) => { 
          // console.log(value)
          // console.log(arr)
          return <Square value={ value} key={index}/>
        })
      }
    </div>
  )
}

export default Board