import React from 'react';
import Card from "./Card";

function Project() {
  const data = {
    first: { src: 'images/Na Yeon.jpg', title: 'First', explanation: 'This is the first project' },
    second: { src: 'images/Na Yeon.jpg', title: 'Second', explanation: 'This is the second project' },
    third: { src: 'images/Na Yeon.jpg', title: 'Third', explanation: 'This is the third project' },
    fourth: { src: 'images/Na Yeon.jpg', title: 'Fourth', explanation: 'This is the fourth project' },
  };
  return (
    
    <div className="projectsContainer">
      <Card project={data.first} />
      <Card project={data.second} />
      <Card project={data.third} />
      <Card project={data.fourth} />
    </div>
    
  )
}



export default Project;