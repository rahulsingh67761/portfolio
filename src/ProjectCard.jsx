import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, tech, live, github, image }) {
  return (
  <div className="project-card">

      <img src={image} alt={title} className="project-img" />

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;