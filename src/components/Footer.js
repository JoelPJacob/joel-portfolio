import React from 'react';
import './componentsStyles/Footer.css';
import { GitWhite, LinkedinWhite } from '../assets/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          Developed by <a href="https://your-link-to-joel-profile" target="_blank" rel="noopener noreferrer">Joel P Jacob</a>
        </p>
      </div>
      <div className="footer-center">
        <span>|</span>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/joel-p-jacob/" target="_blank" rel="noopener noreferrer">
          <LinkedinWhite className="footer-icon" />
        </a>
        <a href="https://github.com/JoelPJacob" target="_blank" rel="noopener noreferrer">
          <GitWhite className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
