import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> Disaster <span>Management</span></div>
      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><a href="#home" className='button2'>Home</a></li>
     
         <li><a href="#home" className='button2'>About</a></li>
          <li><a href="#home" className='button2'>Resources</a></li>
           <li><a href="#home" className='button2'>Donate</a></li>
           {/* dropdown button */}
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
  );
};

export default Navbar;
