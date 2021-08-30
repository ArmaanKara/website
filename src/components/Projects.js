import React from 'react';
// import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import './Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="code-icon">
                    <i className="fas fa-laptop-code"/>
                    <h1 className="stuff-ive-built-header">
                       Things I've built 
                    </h1>
                    <h4 className="projects-description">
                        <br/> If you would like to see more please check out my 
                        <a href="https://github.com/ArmaanKara"><i className="fab fa-github-square" id="github-square"></i></a>
                    </h4>
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