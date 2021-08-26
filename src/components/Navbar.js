import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
      <header className="navbar">
        <div className="navbar-container">
          <nav className="nav-menu">
            <a href="#about" className="navbar-logo">
              Armaan Kara
            </a>
            <a href="#projects" className="nav-item">
              Past Work
            </a>
            <a href="#skills" className="nav-item">
              Skills
            </a>
            <a href="#testimonials" className="nav-item">
              Testimonials
            </a>
            <a
             href="#contact"
             className="hireme">
               Hire Me
            <i className="fas fa-arrow-right" id="arrow-icon"/>
            </a>
         </nav>
      </div>
    </header>
  );
}






