import React from "react";
import { Link } from "react-router-dom";

import Contact from "./Contact";
import portfolioPic from '../assets/portfolioPic.jpg'
import githubLogo from '../assets/logo-images/githubLogo.png';
import linkedinLogo from '../assets/logo-images/linkedinLogo.png';
import emailLogo from '../assets/logo-images/emailLogo.png'

function Home() {
  return (
    <div>
      <h3 className="intro">
        Hello! My name is <br/>
        <span style={{fontSize:"200%", fontWeight:"bolder"}}>Jared Kim</span> <br/>
        Full Stack Web Developer
      </h3>
      <div className="profile">
        <img src={portfolioPic} className='portfolioPic'/>
        <div className="profile-links">
          <a href="" className="textDecNone"><p>Download Resume</p></a>
          <Link to='/contact' className="textDecNone"><p>Let's Chat!</p></Link>
          <a href="https://github.com/jkim011/" target="_blank" rel="noreferrer"><img className="social-links" src={githubLogo} /></a>
          <a href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer"><img className="social-links" src={linkedinLogo} /></a>
          <a href="mailto:jaredkim011@gmail.com"><img className="social-links" src={emailLogo} /></a>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p className="about-me-text">
          Hi everyone, I'm Jared, a full stack web developer based in Leander, Texas. 
          My favorite part about web development is how it is always changing and there is always something new to learn, so it will never get stale. 
          I enjoy building new web applications that can better people's lives or help them showcase their own work and talents.
          <br/>
          Prior to web development, I was a martial arts instructor for almost 4 years, and carry many of the skills I learned 
          into my new career as a developer, such as attention to detail, organization, time efficiency, and teamwork.
          Training martial arts is still one of my hobbies as it helps keeps me disciplined and focused. I also enjoy video games
          and I am a massive hip hop head. 
        </p>
      </div>
    </div>
  )
}

export default Home;