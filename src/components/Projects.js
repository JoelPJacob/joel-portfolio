// components/Projects/Projects.js
import React from 'react';
import './componentsStyles/Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
