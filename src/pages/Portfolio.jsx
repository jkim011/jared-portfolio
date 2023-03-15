import React from "react";
import SingleProject from "../components/SingleProject";

import gitfund from '../assets/project-images/gitfund.png';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <SingleProject 
        imageSrc={gitfund}
        projectTitle="GitFund"
        projectLink="https://git-fund.herokuapp.com/"
        projectGithub="https://github.com/RyStreet/git-fund"
        projectDescription="MERN Stack application. Crowdfunding and 
          collaborating social app where users can post projects to 
          recieve donations, and put them up for others to collaborate on."
      />
    </div>
  )
};

export default Portfolio;