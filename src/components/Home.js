import React from 'react';
import './componentsStyles/Home.css';
import ProfilePicture from '../assets/images/joel-img.jpg';
import { Git, Linkedin, GitWhite, LinkedinWhite } from '../assets/icons';
import { useTheme } from '../context/ThemeContext';
import Technology from './Technology';

const Home = () => {
    const { theme } = useTheme();
    return (
        <><div className="home">
            <div className="home-container">
                <div className="text-container">
                    <p className="intro">Hello, I'm Joel P Jacob 👋🏼</p>
                    <p className="role">Frontend Developer</p>
                    <p className="description">I like to craft solid and scalable frontend products with great user experiences.</p>

                    <div className="icons-container">
                        {theme === 'dark' ? (
                            <>
                                <GitWhite />
                                <LinkedinWhite style={{ width: '42px' }} />
                            </>
                        ) : (
                            <>
                                <Git />
                                <Linkedin style={{ width: '42px' }} />
                            </>
                        )}
                    </div>
                </div>
                <div className="image-container">
                    <img src={ProfilePicture} alt="Joel P Jacob" className="profile-picture" />
                </div>
            </div>
        </div>
            <div>
                <Technology />
            </div>
        </>
    );
};

export default Home;
