import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
              <div className="about-menu">
                <h1 className="introduction-text">
                    Hi, I'm Armaan
                    <br className="introduction-text1" />I love to build things with software.
                </h1>
                <p className="description-text">
                    Hello My name is Armaan and I am a self-taught developer
                </p>
                <div className="about-buttons">
                    <a 
                      href="#contact"
                      className="about-button-work-with">
                      Work With me
                    </a>
                    <a href="#projects" className="about-button-past-work">
                        See My Past Work
                    </a>
                </div>
            </div>
            <div className="image-on-right-side-about-section">
                <img className="cartoon-image" alt="hero" src="./avento.gif" id="imageofmyself" />
            </div>
            </div>
            
        </section>
    )
}