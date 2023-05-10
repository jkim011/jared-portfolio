import React from "react";

import githubIcon from '../assets/logo-images/github-icon-red.png';
import linkedinIcon from '../assets/logo-images/linkedin-icon-red.png';
import emailIcon from '../assets/logo-images/email-icon-red.png';

function Footer() {
  return (
    <div>
      {/* <hr className="divider"></hr> */}
      <div className="footer" >
        <p>© 2023 Jared Kim</p>     
        <div>
          <a href="https://github.com/jkim011/" target="_blank" rel="noreferrer"><img className="social-links" src={githubIcon} /></a>
          <a href="https://www.linkedin.com/in/jaredkim011/" target="_blank" rel="noreferrer"><img className="linkedin-link" src={linkedinIcon} /></a>
          <a href="mailto:jaredkim011@gmail.com"><img className="social-links" src={emailIcon} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;