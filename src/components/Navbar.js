import React from 'react';
import { Link } from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="navbar">
      <h1 id="logo">De <span id="cafe">cafe&#769;</span></h1>
      <div className="navbar-buttons">
        {/* Link components will handle routing */}
        <Link to="/" className="nav-link">
          <button className="home-btn">Home</button>
        </Link>
        <Link to="/menu" className="nav-link">
          <button className="menu-btn">Menu</button>
        </Link>
        <Link to="/about" className="nav-link">
          <button className="about-btn">About</button>
        </Link>
        <Link to="/contact" className="nav-link">
          <button className="contact-btn">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
