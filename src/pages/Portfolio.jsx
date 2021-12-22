import React ,{useState} from "react";
import { Projects } from "../components/CardStyled";
import projects from "../info/Projects";
import Modal from "react-modal/lib/components/Modal";
import AwesomeSlider from "react-awesome-slider";
import './Portfolio.scss';
import 'react-awesome-slider/dist/styles.css';

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (project) => {
      setSelectedProject(project);
      setModalIsOpen(true);
  }


  return (
    <section id="projects" className="section">
      <h1 className="project-title">MY PROJECTS:</h1>
      <div className="portfolio-container">
       {projects.map ((project) => {        
        return (
          <Projects key={JSON.stringify(project)} onClick={() => expandModal(project)}>
            <img  src={project.images} alt={project.title} />
            <h3 title={project.title}>{project.title}</h3>
            <div>
              {project.technologies.map ((tech) =>{
                return(
                 <img className="project-tech" src={tech.class} alt="" />                
                )               
              })}
            </div>

          </Projects>
          
        );
      })} 
      <Modal className="modal-content" isOpen={modalIsOpen} >
                    <button className="closebtn" onClick={() => setModalIsOpen(false)}>X</button>
                    <div className="modal-contain">
                    <h3>{selectedProject && selectedProject.title}</h3>
                        <AwesomeSlider>
                        {selectedProject && selectedProject.images.map((pic) => {
                            return (
                                <div className="carousel">
                                    <div>
                                    <img className="pic-carousel" src={pic} alt={pic} />
                                    </div>
                                </div>
                            )
                        })}
                        </AwesomeSlider>
                        
                            <div className="techs-contain">
                            {selectedProject && selectedProject.technologies.map((tech) => {
                                return (
                                    <div className="tech-contain">
                                    <p>{selectedProject.description}</p>
                                    </div>
                                )
                            })}
                            </div>
                            <a href={selectedProject && selectedProject.url}><img className="project-link" src="https://cdn-icons-png.flaticon.com/512/106/106900.png" alt="" /></a>
                        
                        </div>
                    </Modal>
      </div>
    
    </section>
  );
};

export default Portfolio;
