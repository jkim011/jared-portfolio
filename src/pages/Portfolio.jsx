import React from "react";
import SingleProject from "../components/SingleProject";

import gitfund from '../assets/project-images/gitfund.png';
import textEditor from '../assets/project-images/text-editor.png';
import noteTaker from '../assets/project-images/note-taker.png';
import ecommerceBackend from '../assets/project-images/ecommerce-backend.png';
import socialNetworkApi from '../assets/project-images/social-network-api.png';
import teamProfileGenerator from '../assets/project-images/team-profile-generator.png';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <SingleProject 
        imageSrc={gitfund}
        projectTitle="GitFund"
        projectLink="https://git-fund.herokuapp.com/"
        projectGithub="https://github.com/RyStreet/git-fund"
        projectDescription="MERN Stack application. Crowdfunding and 
          collaboration social app where developers can support developers. 
          Users can post projects to recieve donations and let others collaborate
          on it, and do the same of other posted projects."
      />
      <SingleProject 
        imageSrc={textEditor}
        projectTitle="Text Editor"
        projectLink="https://jareds-text-editor.herokuapp.com/"
        projectGithub="https://github.com/jkim011/jareds-text-editor"
        projectDescription="PWA. An installable text editor application 
          with offline use capabilities. Uses IndexedDB for storage."
      />
      <SingleProject 
        imageSrc={noteTaker}
        projectTitle="Note Taker"
        projectLink="https://jareds-note-taker.herokuapp.com/"
        projectGithub="https://github.com/jkim011/jareds-note-taker"
        projectDescription="Express.js. A note taking application 
          where users can write, save, and delete notes."
      />
      <SingleProject 
        imageSrc={ecommerceBackend}
        projectTitle="E-Commerce Backend"
        projectLink="https://github.com/jkim011/jareds-ORM-challenge#installation"
        projectGithub="https://github.com/jkim011/jareds-ORM-challenge"
        projectDescription="Express, Sequelize, ORM. This repository contains the 
          back-end of an e-commerce site. No front end has been created yet."
      />
      <SingleProject 
        imageSrc={socialNetworkApi}
        projectTitle="Social Network API"
        projectLink="https://github.com/jkim011/jareds-social-network-api#installation"
        projectGithub="https://github.com/jkim011/jareds-social-network-api"
        projectDescription="Built with MongoDB. This repository is the API and back-end 
          functionality for a social network application. No front end has been created yet."
      />
      <SingleProject 
        imageSrc={teamProfileGenerator}
        projectTitle="Team Profile Generator"
        projectLink="https://github.com/jkim011/jareds-team-profile-generator#installation"
        projectGithub="https://github.com/jkim011/jareds-team-profile-generator"
        projectDescription="Node.js. Generates a team profile with the names 
          of employees, their roles, and contact info. The app is ran in the terminal and then 
          creates an index.html file with the newly generated team profile."
      />
    </div>
  )
};

export default Portfolio;