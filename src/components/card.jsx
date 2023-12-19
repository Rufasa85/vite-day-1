import React from 'react'

export default function Card(props) {
   const styleObj = {
    backgroundColor:props.bg||"salmon"
   }
  return (
    <div style={styleObj}>
        <h3 className="text-warning">Hi, {props.studentName}!</h3>
        <p>lucky number {Math.floor(Math.random()*100)+1}</p>
        <hr/>
    </div>
  )
}
