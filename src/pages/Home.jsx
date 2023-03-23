import React from "react";
import { Link } from "react-router-dom";

import portfolioPic from '../assets/portfolioPic.jpg'
import resumePdf from '../assets/jareds-coding-resume.pdf'

function Home() {
  return (
    <div>
      <h3 className="intro">
        <span style={{fontSize:"130%"}}>
          Hello, I'm <span className="intro-name"> Jared Kim</span> 
        </span> <br/>
        Full Stack Web Developer
      </h3>
      <div className="profile">
        <div>
          <img src={portfolioPic} className='portfolioPic box-shadow'/>
        </div>
        <div className="about-me">
          <p>
            Hi everyone, I'm Jared, a full stack web developer based in Lago Vista, Texas. 
            Prior to web development, I was a martial arts instructor for almost 4 years. I carry many of those skills I learned from being a martial arts instructor
            into my new career as a developer such as: strong attention to detail, organization, time efficiency, and teamwork.
            You can also see a list of all my technical skills in my <a href={resumePdf} download="jareds-coding-resume.pdf" className="textDecNone links">resume. </a> 
            Training martial arts is still one of my hobbies since it keeps me disciplined and focused. To wind down I enjoy playing video games
            and listening to music, mainly hip-hop and rock. 
            <br/> <br/>
            I got into web development because it was a great way for me to express my creativity and exercise my problem solving abilities.
            Building new web applications that can solve real world problems, or help other creative minds showcase their own work and talents brings me a 
            great sense of accomplishment. 
            Here you can check out some of <Link to="/portfolio" className="textDecNone links">my projects. </Link>
            Thanks for checking out my page! If you like my work, <Link to='/contact' className="textDecNone links">lets chat!</Link>               
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;