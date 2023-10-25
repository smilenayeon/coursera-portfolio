import React,{useRef} from 'react'
import Project from './Project';
import Contact from './Contact';




function Main() {

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);


  const scrollToComponent1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  const scrollToComponent2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (


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
       <h3 onClick={scrollToComponent1} >Project</h3>
       <h3 onClick={scrollToComponent2} >Contact</h3>
       
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
    <div ref={scrollRef1}>
        <Project />
      </div>
      <div ref={scrollRef2}>
        <Contact />
      </div>
  
    </div>

  )
}

export default Main;