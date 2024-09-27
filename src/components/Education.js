import React from 'react';
import './componentsStyles/Education.css';
import { Git } from "../assets/icons";
import { useTheme } from '../context/ThemeContext';

let educationElements = [
  {
    id: 1,
    title: "Master of Computer Application",
    location: "Union Christian College, Aluva, Kerala",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    date: "2019 - 2022",
    icon: "work",
  },
  {
    id: 2,
    title: "Bachelor of Computer Application",
    location: "CMS College, Kottayam, Kerala",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    date: "2016 - 2019",
    icon: "work",
  },
];

const Education = () => {
  const { theme } = useTheme();
  
  return (
    <div className="container">
      <div>
        <p className="main-heading">Education</p>
      </div>
      <div className="education">
        {educationElements.map((element) => (
          <div key={element.id} className={`education-element ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="education-content">
              <p className='sub-heading'>{element.title}</p>
              <p className='main-heading-h1'>{element.location}</p>
              <p className='main-heading-h1'>{element.date}</p>
              <p className='sub-text'>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
