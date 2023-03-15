import React from "react";

import githubLogo from '../assets/logo-images/githubLogo.png';

function SingleProject(props) {
  return (
    <div className="card project-card text-bg-dark">
      <img src={props.imageSrc} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <a href={props.projectLink} className="textDecNone project-card-text" target="_blank" rel="noreferrer">
          <h2 className="card-title">{props.projectTitle}</h2>
        </a>
        <a href={props.projectGithub} className="textDecNone project-card-text" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub Link" className="githubLogo"/>
        </a>
        <p className="card-text" style={{color:"black"}}>{props.projectDescription}</p>
      </div>
    </div>
  )
};

export default SingleProject;