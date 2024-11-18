import React, { useState, useEffect, useRef } from 'react';
import "./style.css";
import { Tv } from '../Tv';


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainNavRef = useRef(null); // Referenz für das Menü
  const menuToggleRef = useRef(null); // Referenz für den Toggle-Button

  // Toggle-Funktion für das Menü
  const handleToggleClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Hinzufügen oder Entfernen der Klasse für das Menü basierend auf dem Zustand
  useEffect(() => {
    const mainNav = mainNavRef.current;
    if (mainNav) {
      if (isMenuOpen) {
        mainNav.classList.add('main-nav-open');
      } else {
        mainNav.classList.remove('main-nav-open');
      }
    }
  }, [isMenuOpen]);

  return (
    <header>
      <div className="wrapper">
       <div className='logo'><img src="./src/assets/logo.svg"/></div>
     

        {/* Navigationsmenü mit Ref */}
        <nav ref={mainNavRef} className="main-nav">
          <ul>
            <li><a href="#"><i className="fa fa-home nav-icon"></i>Home </a></li>
            <li><a href="#"><i className="fa fa-info nav-icon"></i>About</a></li>
            <li><a href="#"><i className="fa fa-usd nav-icon"></i>Service</a></li>
            <li><a href="#"><i className="fa fa-pencil nav-icon"></i>Blog</a></li>
            <li><a href="mailto:kasrazohourian@gmail.com"><i className="fa fa-envelope nav-icon"></i>Contact Us</a></li>
          </ul>
        </nav>

        {/* Menü-Toggle-Button mit Ref und Event */}
        <div
          ref={menuToggleRef}
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggleClick}
        >
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
}
