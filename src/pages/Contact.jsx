import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p>Message successfully sent! I will contact you back ASAP</p>
  )
};

function Contact() {
  const [result, showResult] = useState(false);
  const [errorMessage, showErrorMessage] = useState('');

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!document.getElementById("name").value) {
      showErrorMessage("Please enter your name")
      return;
    }
    if(!document.getElementById("email").value) {
      showErrorMessage("Please enter your email")
      return; 
    }
    if(!document.getElementById("message").value) {
      showErrorMessage("Please include a message")
      return; 
    }

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset();
    showErrorMessage("");
    showResult(true);
  };

  return (
    <div className='contact-container'>
      <h2 className='title'>Contact Me</h2>
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
      <div className="result">{errorMessage}</div>

    </div>
  );
}

export default Contact;