import React from 'react';
import './componentsStyles/Home.css';
import { useTheme } from '../context/ThemeContext';
import Marquee from "react-fast-marquee";
import './componentsStyles/Technology.css';

const Technology = () => {
    const { theme } = useTheme();
    const gradientColor = theme === 'light' ? 'rgb(248,251,253)' : 'rgb(0, 0, 0)';

    return (
        <>
            <div>
                <p className='main-heading'>
                    My Tech Stacks
                </p>
            </div>
            <div className='condainer'>
                <Marquee speed={70} delay={0} gradientColor={gradientColor} gradient={true} gradientWidth={10}>
                    <img width="1500px" src="https://skillicons.dev/icons?i=react,html,css,js,bootstrap,materialui,flutter,postman,figma,firebase,github,vscode,npm,netlify,bitbucket" alt="Tech Stacks" />
                </Marquee>
            </div>
        </>
    );
};

export default Technology;
