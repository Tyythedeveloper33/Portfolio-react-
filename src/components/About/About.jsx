import './About.css';

import { NavLink } from 'react-router-dom';
export default function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate developer who loves solving problems and building great things.
          I aim to create beautiful, functional, and intuitive digital experiences.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img src='/port.jpg' alt="Profile"/>
        </div>
        <div className="about-details">
          <h2>My Journey</h2>
          <p>
            I started my journey in web development with a curiosity for how websites and apps are built.
            Over time, my interest grew into a full-time passion. From mastering frontend technologies like React and JavaScript
            to understanding the backend with Node.js, I’ve worked on creating seamless and responsive applications.
          </p>

          <h3>Skills & Expertise</h3>
          <ul>
            <li>Frontend Development: React, HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Backend Development: Node.js, Express.js</li>
            <li>Version Control: Git, GitHub</li>
            <li>Responsive Design & User Experience</li>
            <li>Problem Solving & Collaboration</li>
          </ul>
       <NavLink to='/contact' className='btn-contact'>Let's Connect</NavLink>

        </div>
      </section>

      <section className="about-footer">
        <p>Feel free to reach out. I’m always excited to discuss new opportunities!</p>
      </section>
    </div>
  );
}
