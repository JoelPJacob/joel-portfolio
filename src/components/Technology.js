import React from 'react';
import './componentsStyles/Home.css';
import ProfilePicture from '../assets/images/joel-img.jpg';
import { Git, Linkedin, GitWhite, LinkedinWhite } from '../assets/icons';
import { useTheme } from '../context/ThemeContext';
import Marquee from "react-fast-marquee";
import './componentsStyles/Technology.css';


const Technology = () => {
    return (
        <>
            <div>
                <p className='main-heading'>
                    My Tech Stacks
                </p>
            </div><div className='condainer'>
                <Marquee speed={70} delay={0} gradientColor={'rgb(248,251,253)'} gradient={true} gradientWidth={10}>
                    <img width="1500px" src="https://skillicons.dev/icons?i=react,html,css,js,bootstrap,materialui,flutter,postman,figma,firebase,github,vscode,npm,netlify,bitbucket" />
                </Marquee>
            </div>
        </>
    );
};

export default Technology;