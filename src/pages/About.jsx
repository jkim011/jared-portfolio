import React from "react";
import { Link } from "react-router-dom";
import PageAnimation from "../components/PageAnimation";

import portfolioPic from '../assets/portfolioPic.jpg'
import resumePdf from '../assets/jareds_fullstack_resume.pdf'

function About() {
  return (
    <PageAnimation>
    <div className="about-container">
      <h1 className="about-title">About</h1>

      <div className="profile">
        <div className="portfolioPicBorder">
          <div className="portfolioPicBorder2">
            <img src={portfolioPic} className='portfolioPic box-shadow'/>
          </div>
        </div>
        
        <div className="about-me">
          <p>
            Based in Lago Vista, TX. I got into web development because it's a way for me to exercise my creativity and problem solving abilities. I build new web applications that solve real world problems, and debug to bring out the best in every app. Prior to web development, I taught martial arts for 4 years, so I have great soft skills such as attention to detail, organization, time efficiency, and teamwork. Training martial arts is still a hobby of mine since it keeps me disciplined and focused, and I also enjoy playing video games. <br/><br/>
            <a href={resumePdf} download="jareds_fullstack_resume.pdf" className="textDecNone"><span className="resume-link"><h5>Download my resume</h5></span></a>      
          </p>
        </div>
      </div>

      <h2 className="my-skills-title">My Skills</h2> 
      <div className="skills-section">   
          <p>
            <span style={{fontWeight:"bold"}}>Frontend→ </span>React, HTML, CSS, JavaScript, Bootstrap, TypeScript
          </p>
          <p>
          <span style={{fontWeight:"bold"}}>Backend→ </span>Node, Express, MySql, MongoDB, GraphQL
          </p>
      </div>
      
    </div>
    </PageAnimation>
  )
}

export default About;