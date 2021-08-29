import React from 'react';
import './Contact.css';

export default function Contact() {

    const[name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).joinj("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
    }

  return (
    <section id="contact" className="relative">
      <div className="contact-container">
        <h4>What's Next?</h4>
        <h1>Get In Touch</h1>
        <div className="contact-iframe-container">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="contact-iframe"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Vancouver,British+Columbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"            
          />
          <div className="contact-subcontaier-text">
            <div className="contact-address-div">
              <h2 className="contact-h2-address">
                ADDRESS
              </h2>
              <p className="contact-address-p">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="contact-email-phone-div">
              <h2 className="contact-h2-email">
                EMAIL
              </h2>
              <a href="mailto:vancouverarmaan@gmail.com"className="contact-myemail-text">
                vancouverarmaan@gmail.com
              </a>
              <h2 className="contact-h2-phone">
                PHONE
              </h2>
              <p className="contact-phone-p">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="contact-netlify-form">
          <h2 className="contact-h2-hireme">
            Hire Me
          </h2>
          <p className="contact-hireme-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="contact-form-container">
            <label htmlFor="name" className="contact-form-container-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form-container-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-form-container-2">
            <label htmlFor="email" className="contact-form-container-2-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-form-container-2-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-form-container-3">
            <label
              htmlFor="message"
              className="contact-form-container-3-message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-form-container-3-message-textarea"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="contact-form-container-submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}