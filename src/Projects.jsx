import React from 'react'
import ProjectCard from './ProjectCard'
import portfolioImg from "./assets/portfolio.jpg";
import ecommerceImg from "./assets/e-commerce.jpg";

const Projects = () => {
  return (
   <section className="projects">
    <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">

        <ProjectCard
          title="Portfolio Website"
          description="A clean and responsive developer portfolio showcasing my skills, projects, and contact information."
          tech={["React", "CSS"]}
          live="https://github.com/rahulsingh67761"
          github="https://github.com/rahulsingh67761"
          image={portfolioImg}
        />

        <ProjectCard
          title="E-commerce website"
          description="A simple task management application to add, delete, and manage daily tasks efficiently."
          tech={["React", "JavaScript", "CSS"]}
          live="https://rahulsingh67761.github.io/e-commerce/"
          github="https://github.com/rahulsingh67761/e-commerce"
          image={ecommerceImg}
        />

      </div>

    </section>
  )
}

export default Projects

// A responsive developer portfolio showcasing projects,
//            skills and contact information with a modern UI