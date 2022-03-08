import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id='about'>
      <div className='about-container'>
        <div className='about-menu'>
          <h1 className='introduction-text'>
            Hi, I'm Armaan.
            <br className='introduction-text1' />I enjoy building things with
            software.
          </h1>
          <br />
          <div className='description-text'>
            I am a software engineer that currently specializes in building
            clean front-end user experiences. I built this website to showcase
            some of my skills!
          </div>
          <div className='about-buttons'>
            <a href='#contact' className='about-button-work-with'>
              Work With Me
            </a>
            <a href='#projects' className='about-button-past-work'>
              See My Past Work
            </a>
          </div>
        </div>
        <div className='image-on-right-side-about-section'>
          <img
            className='cartoon-image'
            alt='hero'
            src='./media/avento.gif'
            id='imageofmyself'
          />
        </div>
      </div>
    </section>
  );
}
