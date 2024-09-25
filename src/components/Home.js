import React from 'react';
import './componentsStyles/Home.css';
import ProfilePicture from '../assets/images/joel-img.jpg';
import git from '../assets/icons/git.svg';
import linkedin from '../assets/icons/linkedin.svg';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="text-container">
                    <p className="intro">Hello, I'm Joel P Jacob 👋🏼</p>
                    <p className="role">Frontend Developer</p>
                    <p className="description">I like to craft solid and scalable frontend products with great user experiences.</p>
                    
                    <div className="icons-container">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="GitHub" className="icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="icon" />
                        </a>
                    </div>
                </div>
                <div className="image-container">
                    <img src={ProfilePicture} alt="Joel P Jacob" className="profile-picture" />
                </div>
            </div>
        </div>
    );
};

export default Home;
