import React, { useState, useEffect } from "react";
import "./componentsStyles/Education.css";
import { useTheme } from '../context/ThemeContext';
import Works from "../components/Work";

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
        subject: "Customer Classification Based on Previous Purchase Details",
        fullDescription:
          "Developed a customer classification system utilizing machine learning and AI to enhance targeted marketing strategies. Python was used for the front end and SQL for database management. This project focused on automating the categorization of customers based on purchase patterns, improving the effectiveness of marketing campaigns and aiding data-driven decision-making processes."
      },
      {
        id: 2,
        subject: "Online Allotment System",
        fullDescription:
          "Created an online allotment system to streamline the college admission process. Built using PHP for the front end and SQL for the database, this web application was designed to optimize student enrollment workflows, making the admission process smoother and more efficient. The project strengthened my skills in web development, project execution, and database management."
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
          "Designed and developed a mobile learning application for children, built on the Android platform. This app provided interactive study materials aimed at enhancing the learning experience for young users. By integrating engaging content and user-friendly features, the app facilitated easy access to educational resources, promoting better learning outcomes for kids."
      },
      {
        id: 2,
        subject: "Catering Management System",
        fullDescription:
          "Developed a desktop application for a catering service provider, aimed at automating order placement and management processes. The application was built using Visual Basic (VB) for the front end and MySQL for the database. This system improved the efficiency of catering order management and provided a user-friendly interface, enhancing overall business operations."
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
    }, 2000); // Slide automatically every 5 seconds

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
        <div style={{ marginTop: '20px', marginBottom: '50px' }}>
          <p className="main-heading">Education</p>
        </div>

        <div className="education-section">
          {/* First and second education items */}
          <div className="education-row">
            {educationData.slice(0, 2).map((education) => (
              <div key={education.id} className="education-item">
                <div className="education-details">
                  <div className="education-info">
                    <img
                      src={require("../assets/images/rb_41884.png")}
                      alt="College Logo"
                      className="college-logo"
                    />
                    <div>
                      <p style={{fontSize:'19px',fontWeight:'600'}}>{education.subject}</p>
                    </div>
                  </div>
                  <p className="education-collge-name">{education.college}</p>
                  <p className="education-collge-duration">{education.duration}</p>

                  {/* Conditionally render Projects section */}
                  {education.projects && education.projects.length > 0 && (
                    <div className="projects-section">
                      <h4>Projects</h4>
                      <div className="timeline">
                        {education.projects.map((project) => (
                          <div key={project.id} className="project-item">
                            <div className="timeline-line" style={timelineLineStyle}></div>
                            <div className="project-content">
                              <p className="eduction-project-title">{project.subject}</p>
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
      <Works />
    </>
  );
};

export default Education;
