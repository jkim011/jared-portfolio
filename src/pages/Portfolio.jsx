import React from "react";
import SingleProject from "../components/SingleProject";

import gitfund from '../assets/project-images/gitfund.png';
import textEditor from '../assets/project-images/text-editor.png';
import noteTaker from '../assets/project-images/note-taker.png';
import ecommerceBackend from '../assets/project-images/ecommerce-backend.png';
import socialNetworkApi from '../assets/project-images/social-network-api.png';
import techBlog from '../assets/project-images/techblog.png';

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-container">
        <SingleProject 
          imageSrc={gitfund}
          projectTitle="GitFund"
          projectLink="https://git-fund.herokuapp.com/"
          projectGithub="https://github.com/RyStreet/git-fund"
          projectDescription="Crowdfunding and collaboration social app where developers can support 
            developers. Users can post projects to recieve donations and let others collaborate on it, 
            and do the same of other posted projects."
          projectLanguages="MERN Stack, Apollo, GraphQL, Semantic-UI, CSS, JWT, Node"
        />
        <SingleProject 
          imageSrc={textEditor}
          projectTitle="Text Editor"
          projectLink="https://jareds-text-editor.herokuapp.com/"
          projectGithub="https://github.com/jkim011/jareds-text-editor"
          projectDescription="An installable text editor application with offline use capabilities. 
            Always saves the user's text input."
          projectLanguages="IndexedDB, JavaScript, CSS, HTML, Webpack, Express, Node"
        />
        <SingleProject 
          imageSrc={techBlog}
          projectTitle="Tech Blog"
          projectLink="https://jareds-tech-blog.herokuapp.com/"
          projectGithub="https://github.com/jkim011/tech-blog"
          projectDescription="A blog site where developers can read and write about technical concepts, 
            recent advancements, and new technologies. Users can create an account and sign in to comment 
            on posts as well."
          projectLanguages="JavaScript, Handlebars, CSS, MySQL, Express, Sequelize, Node"
        />
        <SingleProject 
          imageSrc={noteTaker}
          projectTitle="Note Taker"
          projectLink="https://jareds-note-taker.herokuapp.com/"
          projectGithub="https://github.com/jkim011/jareds-note-taker"
          projectDescription="A note taking application where users can write, save, and delete notes."
          projectLanguages="Node, Express, JavaScript, CSS, HTML"
        />
        <SingleProject 
          imageSrc={socialNetworkApi}
          projectTitle="Social Network API"
          projectLink="https://github.com/jkim011/jareds-social-network-api#installation"
          projectGithub="https://github.com/jkim011/jareds-social-network-api"
          projectDescription="The API for a social network application where users can share thoughts, 
            add friends, and react to friends' thoughts. There is no front end so routes are tested
            with a tool like Insomnia."
          projectLanguages="JavaScript, Express, Mongoose, MongoDB, Node, Moment.js"
        />
        <SingleProject 
          imageSrc={ecommerceBackend}
          projectTitle="E-Commerce Backend"
          projectLink="https://github.com/jkim011/jareds-ORM-challenge#installation"
          projectGithub="https://github.com/jkim011/jareds-ORM-challenge"
          projectDescription="The back-end for an e-commerce site where users can add, search, update, and
            delete products for their online store. There is no front end so routes are tested with a tool 
            like Insomnia."
          projectLanguages="JavaScript, Express, Sequelize, MySQL, Node"
        />      
      </div>
    </div>
  )
};

export default Portfolio;