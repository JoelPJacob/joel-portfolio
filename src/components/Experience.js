import React from "react";
import "./componentsStyles/Experience.css";

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "RoadE Labs Pvt. Ltd.",
    duration: "Nov 2022 - Present",
    year: "2024",
    description:
      "Managed project TaskSphere, leading mobile app development and API testing.",
  },
  {
    id: 2,
    title: "Junior Finance Executive",
    company: "Marymatha Infrastructure Pvt Ltd",
    duration: "Oct 2023 - Feb 2024",
    year: "2023",
    description:
      "Executed financial strategies and managed client consultations to increase revenue.",
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <><div>
      <p className="main-heading">Experience</p>
    </div>
    <div className="timeline">
    {experienceData.map((experience, index) => (
  <div
    key={experience.id}
    className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
  >
    <div className="timeline-dot" />
    <div
      className={`timeline-year timeline-year-${experience.year}`}
    >
      {experience.year}
    </div> 
    <div className="timeline-content-flex">
      <div className="timeline-content">
        <h3 className="timeline-title">{experience.title}</h3>
        <h4 className="timeline-company">{experience.company}</h4>
        <p className="timeline-duration">{experience.duration}</p>
        <p className="timeline-description">{experience.description}</p>
      </div>
    </div>
  </div>
))}

      </div>
      </>
  );
};

export default Experience;
