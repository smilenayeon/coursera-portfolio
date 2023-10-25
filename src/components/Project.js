import React from 'react';
import Card from "./Card";

function Project() {

  const data = {
    first: { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEuHNMfUxmdvvOC0B8r21QPMepRxlgdFcZQ&usqp=CAU', title: 'Simple calculator', explanation: 'This is the first project. This is a simple caculator that we can use.' },
    second: { src: 'https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-vs-car-sharing/car-keys.jpg', title: 'Car rental website', explanation: 'This is the second project. This is a car rental website cloning project.' },
    third: { src: 'https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop', title: 'Simply Weather', explanation: 'This is the third project. This tells the weather of the input location.' },
    fourth: { src: 'https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg', title: 'Animal Extinction Tracker', explanation: 'This is the fourth project. This tracks the number of endangered animals.' },
  }; 

  return ( 
    <div className="projectsContainer">
      <div><Card project={data.first} /></div>
      <div><Card project={data.second} /></div>
      <div><Card project={data.third} /></div>
      <div><Card project={data.fourth} /></div>
    </div>
  );
}



export default Project;