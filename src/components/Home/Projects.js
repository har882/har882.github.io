import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../styles/Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Projects = () => {
  return (
   
      <Container fluid className="project-section" id="project">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                
                isBlog={false}
                title="Syllabus Tracker"
                description="Currently working on a project to help student to keep a track of their syllabus using Java, 
                Spring boot, MYSQL, Thyme leaf, HTML, CSS, JavaScript."
                link="https://github.com/har882/syllabus-tracker-"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                
                isBlog={false}
                title="Gym Management System"
                description="The system helps the administrator to manage the members, trainers of gym. It helps the new member
                to decide the package they want to choose and provides payment facility."
                
              />
            </Col>

            
          </Row>
         
        </Container>
      </Container>
   
  );
};

export default Projects;
