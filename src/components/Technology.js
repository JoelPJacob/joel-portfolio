import React from 'react';
import './componentsStyles/Home.css';
import { useTheme } from '../context/ThemeContext';
import Marquee from "react-fast-marquee";
import './componentsStyles/Technology.css';

const techStacks = [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Material UI', icon: 'https://skillicons.dev/icons?i=materialui' },
    { name: 'Flutter', icon: 'https://skillicons.dev/icons?i=flutter' },
    { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'npm', icon: 'https://skillicons.dev/icons?i=npm' },
    { name: 'Netlify', icon: 'https://skillicons.dev/icons?i=netlify' },
    { name: 'Bitbucket', icon: 'https://skillicons.dev/icons?i=bitbucket' }
];

const Technology = () => {
    const { theme } = useTheme();
    const gradientColor = theme === 'light' ? 'rgb(248,251,253)' : 'rgb(0, 0, 0)';

    return (
        <>
            <div>
                <p className='tech-main-heading'>
                    My Tech Stacks
                </p>
            </div>
            <div className='container'>
                <Marquee speed={70} delay={0} gradientColor={gradientColor} gradient={true} gradientWidth={10} pauseOnHover={true}>
                    {techStacks.map((tech, index) => (
                        <div key={index} className="tech-icon-container">
                            <img width="1500px" src={tech.icon} alt={tech.name} />
                            <span className="tech-icon-name">{tech.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default Technology;
