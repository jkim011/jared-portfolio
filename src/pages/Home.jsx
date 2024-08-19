import React from "react";
import { Link } from "react-router-dom";
import PageAnimation from "../components/PageAnimation";

import resumePdf from '../assets/jareds_fullstack_resume.pdf'
import ParticleBackground from "../components/ParticleBackground";

function Home() {
  return (
    <div>
      <ParticleBackground />
      {/* <PageAnimation> */}
      <div className="intro-container">        
        <div className="intro">
          <h2 className="intro-name">Jared Kim</h2>
          <h3 className="intro-title">Full Stack Web Developer</h3>
        </div>

        <div className="intro-points">
          <div className="intro-points-bullets">
            <li>Intuitive, easy to use user interface</li>
            <li>Responsive layouts for every device</li>
          </div>
          <div className="intro-points-bullets">
            <li>Dynamic and scalable websites</li>
            <li>Eye appealing web designs</li>
          </div>
        </div>

        <div className="home-btns-container">
          <Link to={"/portfolio"}>
            <button className="btns home-btns">Portfolio</button>
          </Link>
          <a href={resumePdf} download="jareds-coding-resume.pdf">
            <button className="btns home-btns">Resume</button>
          </a>
        </div>
      </div>
      {/* </PageAnimation> */}
    </div>
  )
}

export default Home;