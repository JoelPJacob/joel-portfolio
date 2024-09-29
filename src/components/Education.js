import React, { useState, useEffect } from "react";
import "./componentsStyles/Education.css";
import { useTheme } from '../context/ThemeContext';

const educationData = [
  {
    id: 1,
    title: "Master of Computer Application",
    company: "Union Christian College, Aluva, Kerala",
    duration: "Sep 2019 - Aug 2022",
    year: "2024",
  },
  {
    id: 2,
    title: "Bachelor of Computer Application",
    company: "CMS College, Kottayam, Kerala",
    duration: "May 2016 - Aug 2019",
    year: "2023",
  },
  // Add more educations here
];

const certifications = [
  "The Complete React Native + Hooks Course – Udemy",
  "React - The Complete Guide 2024 (incl. React Router & Redux) – Udemy",
  "React Native: Advanced Concepts – Udemy",
  "React Native Expo Chat Application with Firebase – Udemy",
  "From Developer to Team Lead - Effective Dev Team Leading – Udemy",
  "Master React Native Animations – Udemy"
];

const Education = () => {
  const { theme } = useTheme();
  const [currentCertificationIndex, setCurrentCertificationIndex] = useState(0);

  // Function to change certification
  const changeCertification = () => {
    setCurrentCertificationIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  // Automatically change certification every 5 seconds
  useEffect(() => {
    const interval = setInterval(changeCertification, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
      <div>
        <p className="main-heading">Education</p>
      </div>
      <div className="education">
        {educationData.map((education, index) => (
          <div
            key={education.id}
            className={`education-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="education-dot" />
            <div className={`education-year education-year-${education.year}`}>
              {education.year}
            </div>
            <div className="education-content-flex">
              <div className="education-content">
                <h3 className="sub-heading">{education.title}</h3>
                <p className="sub-text">{education.company}</p>
                <p className="education-duration">{education.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="main-heading">Certifications</p>
      </div>
      <div className="certification-container"> {/* New wrapper for center alignment */}
        <div className="certification-border">
          <p className="certification">{certifications[currentCertificationIndex]}</p>
          <div className="circle-container">
            <div 
              className={`circle ${currentCertificationIndex === 0 ? 'active' : ''}`}
              onClick={() => setCurrentCertificationIndex(0)}
            />
            <div 
              className={`circle ${currentCertificationIndex === 1 ? 'active' : ''}`}
              onClick={() => setCurrentCertificationIndex(1)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
