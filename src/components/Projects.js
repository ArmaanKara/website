import React from 'react';
// import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import './Projects.css';

export default function Porjects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="code-icon">
                    <i className="fas fa-laptop-code "/>
                    <h1 className="stuff-ive-built-header">
                        Things I've Built
                    </h1>
                    <p className="projects-description">
                        This is a project I built with my own two hands
                    </p>
                </div>
                <div className="projects-gallery">
                    {projects.map((project) => (
                        <a href={project.link} key={project.image} className="project-links">
                            <div className="project1">
                                <img alt="gallery" className="project-image" src={project.image}/>
                            <div className="card-flipped-project1-subtitle">
                                <h2 className="card-flipped-project1-subtitle-yes">
                                    {project.subtitle}
                                </h2>
                                <h1 className="card-flipped-project1-title">
                                    {project.title}
                                </h1>
                                <p className="card-flipped-project1-description">{project.description}</p>
                            </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}