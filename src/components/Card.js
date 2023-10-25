import React from 'react'

function Card(props) {
  return (
    <div className="Card">
  
      <img className="cardImage" src={props.project.src} alt={props.project.title}></img>
        <div className="cardLetters">
            <h3>{props.project.title}</h3>
            <p>{props.project.explanation}</p>
            <p>See more →</p>
        </div>
        
  
    </div>
  )
}

export default Card;