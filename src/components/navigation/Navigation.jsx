import { NavLink } from "react-router-dom"
import "./Navigation.css"
export default function Navigation() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <a href="#">Tyler Webster</a>
    </div>
    <ul className='navbar-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

    </ul>
    <div className="navbar-toggle" >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  )
}
