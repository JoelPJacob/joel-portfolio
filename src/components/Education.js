import React, { useState, useEffect } from "react";
import "./componentsStyles/Education.css";
import { useTheme } from '../context/ThemeContext';

const certifications = [
  { id: 1, title: "Certified React Developer", date: "June 2022" },
  { id: 2, title: "Python for Data Science", date: "April 2021" },
  { id: 3, title: "Project Management Professional (PMP)", date: "March 2023" },
  { id: 4, title: "Advanced Excel Certification", date: "August 2020" },
  { id: 5, title: "Financial Services Certificate", date: "May 2021" },
];

const educationData = [
  {
    id: 1,
    subject: "Master of Computer Application",
    college: "Union Christian College, Aluva, Kerala",
    duration: "Sep 2019 - Aug 2022",
    projects: [
      {
        id: 1,
        subject: "CUSTOMER CLASSIFICATION BASED ON PREVIOUS PURCHASE DETAILS",
        fullDescription:
          "Developed a customer classification system employing machine learning and AI to boost targeted marketing, with Python as the front end and SQL as the back end. This project honed my skills in data analysis and machine learning for informed decision-making.",
      },
      {
        id: 2,
        subject: "Online Allotment System",
        fullDescription:
          "Created 'Online Allotment System' to streamline college admissions. Using PHP and SQL, built a user-friendly web app for efficient admission processes. Skills: web dev, database management, project execution.",
      },
    ],
  },
  {
    id: 2,
    subject: "Bachelor of Computer Application",
    college: "CMS College, Kottayam, Kerala",
    duration: "May 2016 - Aug 2019",
    projects: [
      {
        id: 1,
        subject: "Kids App",
        fullDescription:
          "Developed using Android. It is a mobile application which can be used as an online study material for kids.",
      },
      {
        id: 2,
        subject: "Catering Management System",
        fullDescription:
          "Developed using VB and MySQL. It is a desktop application to automate the order placing scenario for a catering service provider. The implementation would improve the process of placing and management. The VB application created is user friendly and effective in order management.",
      },
    ],
  },
];

const Education = () => {
  const { theme } = useTheme();
  const [seeMore, setSeeMore] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Slide automatically every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentSlide]);

  // Functions to handle slide navigation
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const toggleSeeMore = (educationId, projectId) => {
    setSeeMore((prevState) => ({
      ...prevState,
      [`${educationId}-${projectId}`]: !prevState[`${educationId}-${projectId}`],
    }));
  };

  const getFirstLine = (text) => {
    return text.split(".")[0] + ".";
  };

  const getFullDescription = (text) => {
    return text;
  };

  const timelineLineStyle = {
    width: "3px",
    height: "90%",
    position: "absolute",
    left: "-12px",
    top: "10px",
    bottom: "0",
    backgroundColor: theme === "dark" ? "white" : "black", // Conditionally apply color
  };

  return (
    <>
      <div className="experience-container">
        <div>
          <p className="main-heading">Education</p>
        </div>

        <div className="education-section">
          {/* First and second education items */}
          <div className="education-row">
            {educationData.slice(0, 2).map((education) => (
              <div key={education.id} className="education-item">
                <div className="education-details">
                  <h3>{education.subject}</h3>
                  <p>{education.college}</p>
                  <p>{education.duration}</p>

                  {/* Conditionally render Projects section */}
                  {education.projects && education.projects.length > 0 && (
                    <div className="projects-section">
                      <h4>Projects</h4>
                      <div className="timeline">
                        {education.projects.map((project) => (
                          <div key={project.id} className="project-item">
                            <div className="timeline-line" style={timelineLineStyle}></div>
                            <div className="project-content">
                              <p>{project.subject}</p>
                              <p>
                                {!seeMore[`${education.id}-${project.id}`]
                                  ? getFirstLine(project.fullDescription)
                                  : getFullDescription(project.fullDescription)}
                              </p>
                              <button onClick={() => toggleSeeMore(education.id, project.id)}>
                                {seeMore[`${education.id}-${project.id}`] ? "See Less" : "See More"}
                              </button>
                            </div>
                            <div className="timeline-circle"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="certification-section">
        <div className="certification-container">
          <p className="main-heading">Certifications</p>

          {/* Certification Box */}
          <div className="certification-box">
            <p className="certification-title">{certifications[currentSlide].title}</p>
            <p className="certification-date">{certifications[currentSlide].date}</p>
          </div>

          {/* Buttons */}
          <div className="carousel-controls">
            <button onClick={goToPreviousSlide}>Previous</button>
            <button onClick={goToNextSlide}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
