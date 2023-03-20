import React from "react";

import resumePdf from '../assets/jareds-coding-resume.pdf'

function Skills() {
  return (
    <div className="my-skills-page">
      <h2>My Skills</h2> <br/>
      <div className="skills-section">
        <div className="frontend-skills">
          <h3>Front End Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="backend-skills">
          <h3>Back End Skills</h3>
          <ul className="skills-list">
            <li>NodeJs</li>
            <li>Express</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </div>
      <a href={resumePdf} download="jareds-coding-resume.pdf" className="textDecNone" style={{color:'black'}}><h5>Download my resume</h5></a>
    </div>
  )
}

export default Skills;