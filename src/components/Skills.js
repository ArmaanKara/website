import React from 'react';
// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import './Skills.css';

export default function Skills(){
    return (
        <section id="skills">
            <div className="skills-container">
                <div className="skills-text">
                    <i class="fas fa-paperclip" id="paperclip-icon" />
                    <h1 className="h1-text-skill-technologies">
                        Skills & Technologies
                    </h1>
                    <p className="paragraph-text">
                        These are the skills I Know and are ordered from most time spent with to least time spent with.
                    </p>
                </div>
                <div className="skills-data">
                    {skills.map((skill) => (
                        <div key={skill} className="actual-skill-text">
                            <div className="skill-and-icon">
                                <i className="far fa-id-badge" id="badge-icon" />
                                <span className="skills-side-by-side">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}