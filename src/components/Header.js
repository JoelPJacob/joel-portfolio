import React, { useContext } from 'react';
import './componentsStyles/Header.css';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
const {toggleTheme,theme}=useTheme();
  return (
    <div className="header">
      <div className="left">
        <p>Joel</p>
      </div>
      <div className="center">
        <button className="mode-toggle" onClick={toggleTheme}>  {/* Attach the toggle function */}
          Toggle Light/Dark Mode
        </button>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
