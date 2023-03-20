import React from "react";
import { Link } from "react-router-dom";

import githubLogo from '../assets/logo-images/githubLogo.png';
import linkedinLogo from '../assets/logo-images/linkedinLogo.png';
import emailLogo from '../assets/logo-images/emailLogo.png'

function Footer() {
  return (
    <div>
    <hr></hr>
    <div className="footer" >
      <p>© 2023 Jared Kim</p>     
      <div>
        <a href="https://github.com/jkim011/" target="_blank" rel="noreferrer"><img className="social-links" src={githubLogo} /></a>
        <a href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer"><img className="social-links" src={linkedinLogo} /></a>
        <a href="mailto:jaredkim011@gmail.com"><img className="social-links" src={emailLogo} /></a>
      </div>
    </div>
    </div>
  )
}

export default Footer;