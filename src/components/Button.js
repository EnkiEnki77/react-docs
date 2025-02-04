
import React, { use, useState } from 'react'

function Button(props) {
   

  return (
      <button onClick={props.onClick} style={{ backgroundColor: props.bgColor }}>clicked me { props.count} times</button>
  )
}

export default Button