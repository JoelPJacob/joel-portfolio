// components/Header/Header.js
import React from 'react';
import './componentsStyles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>Joel</h1>
      </div>
      <div className="center">
        {/* <button className="mode-toggle">Toggle Light/Dark Mode</button> */}
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
