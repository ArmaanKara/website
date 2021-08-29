import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
              <div className="about-menu">
                <h1 className="introduction-text">
                    Hi, I'm Armaan.
                    <br className="introduction-text1" />
                    I love to build things with software.
                </h1>
                <br/>
                <p className="description-text">
                   I am a self-taught developer and built this webiste to showcase my skills!
                </p>
                <div className="about-buttons">
                    <a 
                      href="#contact"
                      className="about-button-work-with">
                      Work With Me
                    </a>
                    <a href="#projects" className="about-button-past-work">
                        See My Past Work
                    </a>
                </div>
            </div>
            <div className="image-on-right-side-about-section">
                <img className="cartoon-image" alt="hero" src="./media/avento.gif" id="imageofmyself" />
            </div>
            </div>
            
        </section>
    )
}