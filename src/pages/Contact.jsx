import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import githubLogo from '../assets/logo-images/githubLogo.png';
import linkedinLogo from '../assets/logo-images/linkedinLogo.png';
import emailLogo from '../assets/logo-images/emailLogo.png'

const Result = () => {
  return (
    <p>Message successfully sent! I will contact you back ASAP</p>
  )
};

function Contact() {
  const [result, showResult] = useState(false);

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail_service", "template_xby6m0n", form.current, "tYk5_UArLITlqQJKE")
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className='contactContainer'>
      <h2 className='title'>Contact Me</h2>

      <a href="https://github.com/jkim011/" target="_blank" rel="noreferrer"><img className="social-links" src={githubLogo} /></a>
      <a href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer"><img className="social-links" src={linkedinLogo} /></a>
      <a href="mailto:jaredkim011@gmail.com"><img className="social-links" src={emailLogo} /></a>
      
      <form ref={form} onSubmit={handleFormSubmit} className="contact-form">
        <div className='forms'>
          <label className='textboxLabel'>Name</label> <br/>
          <input id='name' className='textbox' type="text" name="user_name" />
        </div>
        <div className='forms'>
          <label className='textboxLabel'>Email</label> <br/>
          <input id='email' className='textbox' type="email" name="user_email" />
        </div>
        <div className='forms'>
          <label className='textboxLabel'>Message</label> <br/>
          <textarea id='message' className='textbox' rows={12} name="user_message" />
        </div>
        <div className='btnContainer'>
          <input className='submitBtn' type="submit" value="Submit" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>  
      </form>

      <div className='result'>{result ? <Result /> : null}</div>

    </div>
  );
}

export default Contact;