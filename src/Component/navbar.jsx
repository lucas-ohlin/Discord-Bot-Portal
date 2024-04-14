import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { fab, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/header.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          {/* <img src={tarkovGuideImage} alt="TarkovGuide Logo" className="brand-logo" /> */}
          {/* <Link to="/" className="nav-title">TarkovGuide</Link>
          <span className='nav-version'>1.0.3</span> */}
        </div>
        <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a className="nav-link-2">MAPS</a>
          <a target="_blank" href='https://discord.gg/qSHKRaCEkm' className="nav-link">
            <FontAwesomeIcon icon={faDiscord} /> JOIN SERVER
          </a>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar;
