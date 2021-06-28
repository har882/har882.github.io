import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../styles/Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Resume = () => {
  return (
    
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          
          <Row className="resume">
            <Col md={6} className="resume-left">
            <h3 className="resume-heading">Education</h3>
              <Resumecontent
                title="B.E. Information Science and Engineering"
                date="2018 - Present"
                institute="Sir M. Visvesvaraya Institute of Technology, Bangalore"
              />
              <Resumecontent
                title="Higher Secondary School"
                date="May 2018"
                institute="Sardar Patel Public School, Bhopal"
              />
              <Resumecontent
                title="High School"
                date="May 2016"
                institute="The Woodstock School, Gwalior"
              />
              
              
            </Col>
            <Col md={6} className="resume-right">
            <h3 className="resume-heading">Experience</h3>
              <Resumecontent
                title="Target ignite plus trainee"
                institute="TARGET CORPORATION ▪ BANGALORE ▪ INDIA"
                date="Feb 2021 - Present"
                content={[
                  "Learning and working on Project with technology like Spring boot, React, Scala, Spark" 
                ]}
              />
              <Resumecontent
                title="Data Science & Business Analytics Intern"
                institute="SPARK FOUNDATION ▪ BANGALORE ▪ INDIA"
                date="01 June 2021 - 25 June 2021"
                content={[
                  "Worked on Exploratory-data-analysis-retail." 
                ]}
              />
              <Resumecontent
                title="Front-end Developer Intern"
                institute="CONSOLE LANCER ▪ BANGALORE ▪ INDIA"
                date="Oct 2020 - Dec 2020"
                content={[
                  "Designed UI using tool figma and proficiently coded web pages using languages HTML, CSS and JS" 
                ]}
              />
              {/* <h3 className="resume-heading">Extracurricular Activities</h3>
              <Resumecontent
                title="Campus Ambassdor, ECell IIT Bombay"
                content={[
                  "Promoted the activities and startup culture of the company within the campus.",
                  "Motivated students to participate in ecell webinars and activities.",
                ]}
              />
              <Resumecontent
                title="Member of Sir MVIT College’s Dance Team"
                content={[
                  "Represented Sir MVIT in VTU Youth Fest held at Dharwad 2019 in Group Dance.",
                  "Won Inter College Fest “VERVE” for 2 successive year 2018 and 2019."
                ]}
              /> */}
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            {/* <Button variant="primary" href={pdf} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Download Resume
            </Button> */}
          </Row>
        </Container>
      </Container>
   
  );
};

export default Resume;
