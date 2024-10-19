import React from 'react';
import './componentsStyles/About.css';
import AboutPic from '../assets/images/about.png';

const About = () => {
  return (
    <div className="about-section">
      <div className='about-section-layout'>
        <div className='about-section-image'>
          <img src={AboutPic} alt='About Picture' />
        </div>
        <div className='about-section-content'>
          <p className='about-section-main-heading'>About Me</p>
          <div className='about-section-image-mobile'>
            <img src={AboutPic} alt='About Picture' />
          </div>
          <p className='about-section-sub-heading'>
            A dedicated Front-end Developer based in India📍
          </p>
          <p className='about-section-sub-text'>
            Hello! I'm Joel P Jacob, a dedicated Software Engineer with over 2 years of experience in React Native development and React, specializing in mobile applications for iOS and Android. I have a strong background in feature integration, performance tuning, and resolving issues to enhance app stability. Proficient in React Native, React, JavaScript, and API integrations, I am passionate about creating innovative solutions that improve user experiences and drive digital transformation. My commitment to leading junior developers reflects my dedication to advancing in software engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
