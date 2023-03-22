import React from "react";

import resumePdf from '../assets/jareds-coding-resume.pdf'

function Skills() {
  return (
    <div className="my-skills-page">
      <h2>My Skills</h2> <br/>
      <div className="skills-section">
        <div className="frontend-skills box-shadow">
          <h3>Front End Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="backend-skills box-shadow">
          <h3>Back End Skills</h3>
          <ul className="skills-list">
            <li>Node</li>
            <li>Express</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      <a href={resumePdf} download="jareds-coding-resume.pdf" className="textDecNone"><h5 className="resume-link box-shadow">Download my resume</h5></a>
    </div>
  )
}

export default Skills;