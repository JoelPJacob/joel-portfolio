import React, { useState } from 'react';
import './componentsStyles/Header.css';
import { useTheme } from '../context/ThemeContext';
import { LightMode, DarkMode, MenuWhite, MenuBlack, CloseBlack, CloseWhite } from '../assets/icons';

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerHeight = 100;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link or the close button is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="left">
        <p>Joel</p>
      </div>
      <div className="right">
        <nav className="desktop-menu">
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
        <button className="mode-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <DarkMode width={'40px'} height={"40px"} /> : <LightMode width={'40px'} height={"40px"} />}
        </button>
        <button className="menu-toggle" onClick={toggleMenu}>
          {theme === 'light' ? <MenuBlack width={'40px'} height={"40px"} /> : <MenuWhite width={'40px'} height={"40px"} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={closeMenu}>
            {theme === 'light' ? <CloseWhite width={'40px'} /> : <CloseBlack width={'40px'} />}
          </button>
          <ul>
            <li><a onClick={() => { scrollToSection('home'); closeMenu(); }}>Home</a></li>
            <li><a onClick={() => { scrollToSection('about'); closeMenu(); }}>About</a></li>
            <li><a onClick={() => { scrollToSection('education'); closeMenu(); }}>Education</a></li>
            <li><a onClick={() => { scrollToSection('experience'); closeMenu(); }}>Experience</a></li>
            <li><a onClick={() => { scrollToSection('contact'); closeMenu(); }}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
