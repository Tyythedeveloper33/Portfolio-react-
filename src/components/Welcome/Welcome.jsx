import "./Welcome.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Crafting Digital Experiences</h1>
        <p className="hero-subheading">
          Hi! I’m a passionate developer dedicated to building engaging and impactful web applications.
        </p>
        <div className="cta-container">
          <NavLink to="/contact">
            <button className="cta-button">Let's Connect</button>
          </NavLink>
        </div>
      </div>
      <div className="hero-image">
        {/* Optional: Add an image or illustration of your work */}
      </div>
    </section>
  );
}

export default Welcome;
