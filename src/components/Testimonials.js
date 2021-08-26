import React from 'react';
// import {TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import './Testimonials.css';

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="testimonials-container">
                <i className="far fa-user" id="user-icon" />
                <h1 className="testimonials-header">
                    Client Testimonials
                </h1>
                <div className="testimonials-subcontainer">
                    {testimonials.map((testimonial) => (
                        <div className="testimonials-data">
                            <div className="testimonials-border">
                                <i class="fas fa-terminal" id="terminal-icon" />
                                <p className="testimonials-quote">{testimonial.quote}</p>
                                <div className="testimonials-image-div">
                                    <img alt="testimonial" src={testimonial.image} className="testimonials-image-img" />
                                <span className="testimonials-span-name-and-company">
                                    <span className="testimonials-name">
                                        {testimonial.name}
                                    </span>
                                    <span className="testimonials-company">
                                        {testimonial.company}
                                    </span>
                                </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}