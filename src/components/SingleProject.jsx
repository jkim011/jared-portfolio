import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function SingleProject(props) {
  return (
    <Card className="box-shadow" border="danger" style={{ width: '500px', marginBottom:"40px", marginLeft:"20px", marginRight:"20px", backgroundColor:"#FCFFF7" }} >      
      <Card.Body>
        <Card.Title><a href={props.projectLink} style={{fontWeight:"bolder", fontSize:"110%"}} className="textDecNone project-card-text" target="_blank" rel="noreferrer">{props.projectTitle}</a></Card.Title>
        <Link to={props.projectLink} target="_blank" rel="noreferrer"><Card.Img variant="top" src={props.imageSrc} alt="..."/></Link>
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