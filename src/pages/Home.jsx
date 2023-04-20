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
            Based in Lago Vista, Texas. I'm a web developer who exercises my creativity and problem solving abilities to
            build new web applications, debug and improve existing apps, and build sites for other creative minds to showcase their talents or art.
            Here are some of <Link to="/portfolio" className="textDecNone links">my projects. </Link>
            As a former martial arts instructor, I gained a handful of soft skills 
            such as: attention to detail, organization, time efficiency, and teamwork.
            My technical skills are listed in my <a href={resumePdf} download="jareds-coding-resume.pdf" className="textDecNone links">resume. </a> 
            Training in martial arts is still a hobby of mine since it keeps me disciplined and focused. To wind down I enjoy playing video games
            and listening to music, mainly hip-hop and rock. 
            Thanks for checking out my page! <Link to='/contact' className="textDecNone links">Lets chat!</Link>               
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;