import React, { useState } from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <React.Fragment>
    <nav className="navbar">
      <div className="logo">Disaster <span>Management</span></div>
      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="paste-button">
  <button class="button">Resources &nbsp; ▼</button>
  <div class="dropdown-content">
    <a id="top" href="#">Blog</a>
    <a id="middle" href="#">Podcast</a>
    <a id="bottom" href="#">Keep text only</a>
  </div>
</div> 
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? 'X' : '☰'}
      </div>
    </nav>
    </React.Fragment>
  );
};

export default Navbar;



