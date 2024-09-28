import React from 'react';
import './componentsStyles/Education.css';
import { useTheme } from '../context/ThemeContext';
import CircularProgressBar from './CircularProgressBar';
import { ReactJs, JavaScript, Flutter, Figma, Html, Css, PostMan } from '../assets/icons'

let educationElements = [
  {
    id: 1,
    designition: "Senior Software Engineer",
    organization: "RoadE Labs Pvt Ltd",
    location: "Kakkanad, Kochi, Kerala",
    description:
      "Responsible for designing user-friendly applications using React, JavaScript, and CSS, focusing on web performance optimization.",
    date: "DEC To Present",
    year: "2023",
  },
  {
    id: 2,
    designition: "Junior Software Engineer",
    organization: "RoadE Labs Pvt Ltd",
    location: "Kakkanad, Kochi, Kerala",
    description:
      "Contributed to web development projects with React and helped integrate APIs for seamless data interaction.",
    date: "NOV To NOV 2023",
    year: "2022",
  },
  {
    id: 3,
    designition: "Intern",
    organization: "RoadE Labs Pvt Ltd",
    location: "Kakkanad, Kochi, Kerala",
    description:
      "Worked on front-end development projects, gaining experience in HTML, CSS, and JavaScript.",
    date: "AUG To OCT 2019",
    year: "2019",
  },

];
let skills = [
  { id: 1, name: "React Native", percentage: 70, icon: <ReactJs /> },
  { id: 2, name: "React JS", percentage: 80, icon: <ReactJs /> },
  { id: 3, name: "JavaScript", percentage: 90, icon: <JavaScript /> },
  { id: 4, name: "HTML", percentage: 85, icon: <Html /> },
  { id: 5, name: "CSS", percentage: 75, icon: <Css /> },
  { id: 6, name: "Flutter", percentage: 65, icon: <Flutter /> },
  { id: 7, name: "Postman", percentage: 70, icon: <PostMan /> },
  { id: 8, name: "Figma", percentage: 60, icon: <Figma /> },
];

const Education = () => {
  const { theme } = useTheme();
  const isOddCount = educationElements.length % 2 !== 0;

  return (
    <>
      <div>
        <p className="main-heading">Experience</p>
      </div>
      <div className="container">
        <div className={`education ${isOddCount ? 'odd-count' : ''}`}>
          {educationElements.map((element) => (
            <div key={element.id} className={`education-element ${theme === 'dark' ? 'dark' : 'light'}`}>
              <div className="year">{element.year}
                <span className="date-text">{element.date}</span>
              </div>
              <div className="education-content">
                <p>{element.designition}</p>
                <p>{element.organization}</p>
                <p>{element.location}</p>
                <p>{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="main-heading">Skills</p>
        <div className="skills-container">
          {skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <p className='skill-title'>{skill.name}</p>
              <CircularProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Education;
