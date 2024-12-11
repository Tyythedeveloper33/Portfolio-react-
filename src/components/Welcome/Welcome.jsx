import './Welcome.css';
import { NavLink } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi! I’m a passionate developer creating web experiences that inspire.</p>
        <NavLink to="/portfolio" className="btn-explore">Explore My Work</NavLink>
      </div>
    </div>
  );
}
