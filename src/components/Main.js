import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Contact from './Contact';
import Project from './Project';


function Main() {
  return (
    <BrowserRouter>

    <div>
    <div className="MainPage">
    <div className="HeaderContainer">
        <div className="HeaderLogoLinks">
          <a href="https://www.linkedin.com/in/na-yeon-go-31998a297">
            <img className="logoLink" src="/images/linkedIn.png" alt="LinkedIn Logo" />
          </a>
          <a href="https://stackoverflow.com/users/22793933/smilenayeon">
            <img className="logoLink" src="/images/stackoverflow.png" alt="StackOverflow Logo" />
          </a>
          <a href="https://github.com/smilenayeon">
            <img className="logoLink" src="/images/github.png" alt="GitHub Logo" />
          </a>
          <a href="https://www.instagram.com/smilenayeon/">
            <img className="logoLink" src="/images/instagram.png" alt="Instagram Logo" />
          </a>
        </div>
        <div className="HeaderWordLinks">
        <nav>
       
        <Link to="/project">Project</Link>
        <Link to="/Contact">Contact</Link>
        </nav>
       
       
        </div>
      </div>


      <div className="MainContent">
      <div className="centerContent">
       <img className="ProfilePic" src="/images/NA YEON.jpg" alt="profile"/>
      <p>Hello, I'm Na Yeon!</p>
      <h1>A Frontend Developer <br/>
      Bringing Your Vision to Life with Code and Creativity</h1>
      </div> 
      </div>
      
    
      
      
    </div>
    

    </div>
    <Routes>
    
    
        <Route path="/project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default Main;