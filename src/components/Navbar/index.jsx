import React, { useState, useEffect, useRef } from 'react';
import "./style.css";








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
       <div className='logo'> <a href="https://topmoviez.netlify.app "><img src="https://i.ibb.co/4p0LPpy/Download.png"/> </a> </div>

     

        {/* Navigationsmenü mit Ref */}
        <nav ref={mainNavRef} className="main-nav"> 
          
          <ul>
            <li><a href="https://topmoviez.netlify.app"><i className="fa fa-home nav-icon"></i>Home </a></li>
            <li><a href="#"><i className="fa fa-info nav-icon"></i>About</a></li>
            <li><a href="mailto:kasrazohourian@gmail.com"><i className="fa fa-envelope nav-icon"></i>Contact Us</a></li>
            <li className='searchbar'> <input type="search" placeholder='Suche nach Film, Serie, Person... ' size={70}/> <div className='nav-text'>Willkommen.
            Entdecke Millionen von Filmen, Serien und Personen. <img src="https://cdn-icons-png.flaticon.com/128/846/846799.png" alt="" /> </div></li>
          
          </ul>

        </nav>
  
        
        {/* Menü-Toggle-Button mit Ref und Event */}
        <div
          ref={menuToggleRef}
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggleClick}
          
        >
          <div className="hamburger">
      
         </div>
    

        </div>
    


      </div>
    </header>
  );
}
