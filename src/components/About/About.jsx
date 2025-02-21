import './About.css';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Me</h1>
        <p>
        Hey! I’m a 23-year-old developer who loves building things that look good and work even better. I’m all about creating clean, simple designs that are easy for everyone to use.

Outside of coding, I have a big passion for music, photography, and entrepreneurship. Whether I’m capturing the perfect shot, vibing to good music, or working on fresh ideas, I’m always looking for ways to grow and create something meaningful.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img src='port.jpg' alt="Profile" />
        </div>
        <div className="about-details">
          <h2>My Journey</h2>
          <p>
            I started my journey in web development with a curiosity for how websites and apps are built.
            Over time, my interest grew into a full-time passion. From mastering frontend technologies like React and JavaScript
            to understanding the backend with Node.js, I’ve worked on creating seamless and responsive applications.
          </p>

          <h3>Skills & Expertise</h3>
          <div className="skills-container">
            <section className="skill-category">
              <h3>Frontend Development:</h3>
              <div className="slider-container">
                <div className="skill-icons shift-left">
                  <img src="atom.png" alt="React Icon" />
                  <img src="html5.png" alt="HTML5 Icon" />
                  <img src="css.png" alt="CSS Icon" />
                  <img src="js.png" alt="JavaScript Icon" />
                  <img src="redux.svg" alt="Redux Icon" />
                  <img src="bootstrap.svg" alt="Bootstrap Icon" />
                  <img src="axios-ar21.svg" alt="Axios Icon" />
                </div>
              </div>
            </section>
            <section className="skill-category">
              <h3>Backend Development:</h3>
              <div className="slider-container">
                <div className="skill-icons shift-right">
                  <img src="express.svg" alt="Express Icon" />
                  <img src="nodejs.svg" alt="Node.js Icon" />
                  <img src="python.svg" alt="Python Icon" />
                  <img src="postgres.svg" alt="PostgreSQL Icon" />
                  <img src="mongodb.svg" alt="MongoDB Icon" />
                </div>
              </div>
            </section>
            <section className="skill-category">
              <h3>Testing:</h3>
              <div className="slider-container">
                <div className="skill-icons shift-left">
                  <img src="mocha.svg" alt="Mocha Icon" />
                  <img src="jest.svg" alt="Jest Icon" />
                </div>
              </div>
            </section>
            <section className="skill-category">
              <h3>Other Tools:</h3>
              <div className="slider-container">
                <div className="skill-icons shift-right">
                  <img src="docker.svg" alt="Docker Icon" />
                  <img src="aws.svg" alt="AWS Icon" />
                </div>
              </div>
            </section>
          </div>

          <NavLink to='/contact' className='btn-contact'>Let's Connect</NavLink>
          <a href="/Portfolio-react-/resume.pdf" download className='btn-download'>Download Resume</a>
        </div>
      </section>

      <section className="about-footer">
        <p>Feel free to reach out. I’m always excited to discuss new opportunities!</p>
      </section>
    </div>
  );
}
