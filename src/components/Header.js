import React, { useState } from 'react';
import './componentsStyles/Header.css';
import { useTheme } from '../context/ThemeContext';
import { LightMode, DarkMode, MenuWhite, MenuBlack, CloseBlack, CloseWhite } from '../assets/icons';

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link or the close button is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="left">
        {/* <p>Joel</p> */}
      </div>
      <div className="right">
        <nav className="desktop-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="mode-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <DarkMode width={'40px'} /> : <LightMode width={'40px'} />}
        </button>
        <button className="menu-toggle" onClick={toggleMenu}>
          {theme === 'light' ? <MenuBlack width={'40px'} /> : <MenuWhite width={'40px'} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={closeMenu}>
            {theme === 'light' ? <CloseWhite width={'40px'} /> : <CloseWhite width={'40px'} />}
          </button>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
