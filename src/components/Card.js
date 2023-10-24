import React from 'react'

function Card(props) {
  return (
    <div>
    <div className="cardContainer">
        <img src={props.project.src} alt={props.project.title}></img>
        <h3>{props.project.title}</h3>
        <p>{props.project.explanation}</p>
        <p>See more →</p>
    </div>
    </div>
  )
}

export default Card;