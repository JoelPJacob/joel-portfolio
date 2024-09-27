import React from 'react';
import './componentsStyles/Header.css';
import { useTheme } from '../context/ThemeContext';
import { LightMode, DarkMode } from '../assets/icons';

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="header">
      <div className="left">
        <p>Joel</p>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li> {/* Update to anchor links */}
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="mode-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <DarkMode width={'40px'} /> : <LightMode width={'40px'} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
