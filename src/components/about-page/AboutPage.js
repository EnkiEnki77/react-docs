import React from 'react'
import "./AboutPage.css"

function AboutPage() {
    const user = {
      personName: "dumb",
      personAge: 4
    }
  return (
    <>
          <h1>About</h1>
        <p>{user.personName}</p>
      
        {user.personAge < 5 && <img className='avatar'/>}
    </>
  )
}

export default AboutPage