import React from 'react'

function Props(Props) {
  return (
    <>
    <div style={{border:" 2px solid #f04",width:"2px #000"}}>
        <h2>{Props.name}</h2>
        <h2>{Props.rollno}</h2>
        <h2>{Props.marks}</h2>

        </div>
    </>
  )
}

export default Props;