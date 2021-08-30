import React from 'react';
import './Contact.css'; 

export default function Contact(){
  return (
    <div className="contact-container" id="contact">
      <i className="far fa-user-circle" id="user-circle"></i>
      <h1 className="contact-header">
        What's Next?
      </h1>
      <h2 className="contact-get-in-touch">
        Get In Touch
      </h2>
      <p className="contact-looking-for-work">
        I am <b>currently looking for work</b> and am <b>open</b> to any new opportunities.
        Whether you may have a question, want to connect, or even just want to say hello, my inbox
        is always open and I will get back to you as soon as I can! Thank you.
      </p>
      <a className="email-link" href="mailto:vancouverarmaan@gmail.com">
        Contact Me
      </a>
    </div>
  )
}

