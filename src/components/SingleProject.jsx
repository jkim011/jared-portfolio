import React from "react";

import githubLogo from '../assets/logo-images/githubLogo.png';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SingleProject(props) {
  return (
    // <div className="card project-card "> 
    //   <img src={props.imageSrc} className="card-img project-border" alt="..."/>
    //   <div className="card-img-overlay">
    //     <a href={props.projectLink} className="textDecNone project-card-text" target="_blank" rel="noreferrer">
    //       <h2 className="card-title">{props.projectTitle}</h2>
    //     </a>
    //     <a href={props.projectGithub} className="textDecNone project-card-text" target="_blank" rel="noreferrer">
    //       <img src={githubLogo} alt="GitHub Link" className="githubLogo"/>
    //     </a>
    //     <p className="card-text" style={{color:"black"}}>{props.projectDescription}</p>
    //   </div>
    // </div>

    <Card className="box-shadow" border="danger" style={{ width: '500px', marginBottom:"40px", marginLeft:"20px", marginRight:"20px", backgroundColor:"#FCFFF7" }} >      
      <Card.Body>
        <Card.Title><a href={props.projectLink} style={{fontWeight:"bolder", fontSize:"110%"}} className="textDecNone project-card-text" target="_blank" rel="noreferrer">{props.projectTitle}</a></Card.Title>
        <Card.Img variant="top" src={props.imageSrc} alt="..."/>
        <Card.Text>
          {props.projectDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush text-color">
        <ListGroup.Item style={{color:"#89043D", backgroundColor:"#FCFFF7"}} >{props.projectLanguages}</ListGroup.Item>
        <Card.Link style={{padding:"5px", fontWeight:"bold"}} href={props.projectGithub} className="textDecNone project-card-text" target="_blank" rel="noreferrer">GitHub Repository</Card.Link>
      </ListGroup>
    </Card>
  );
}

export default SingleProject;