import React from "react";
import { Projects } from "../components/CardStyled";
import projects from "../info/Projects";

const Portfolio = () => {
  return (
    <section id="projects" className="section">
      <h1 className="project-title">MY PROJECTS:</h1>
      <div className="portfolio-container">
       {projects.map ((project) => {        
        return (
          <Projects key={JSON.stringify(project)}>
            <img src={project.images} alt={project.title} />
            <h3 title={project.title}>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            <div>
              {project.technologies.map ((tech) =>{
                return(
                 <img className="project-tech" src={tech.class} alt="" /> 
                 
                )               
              })}
            </div>
            <a href={project.url}><img className="project-link" src="https://cdn-icons-png.flaticon.com/512/106/106900.png" alt="" /></a>
          </Projects>
        );
      })} 
      </div>
    
    </section>
  );
};

export default Portfolio;
