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
                title="ClickStream Data Pipeline"
                description="This is a group project carried out under the guidance of Target Corporation. We designed and
        developed a Data pipeline that takes structured raw data as input and delivers clean and good quality Clickstream Data."
                link="https://github.com/ignite-plus-2021/CLICKSTREAM-DATA-PIPELINE"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard

                  isBlog={false}
                  title="Syllabus Tracker"
                  description="Currently working on a project to help student to keep a track of their syllabus using Java,
                Spring boot, MYSQL, Thyme leaf, HTML, CSS, JavaScript."
                  link="https://github.com/har882/syllabus-tracker-"
                
              />
            </Col>

            
          </Row>
         
        </Container>
      </Container>
   
  );
};

export default Projects;
