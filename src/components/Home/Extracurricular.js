import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../styles/Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resumecontent from "./ResumeContent";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Harshita_Saxena_Resume.pdf";

const Extracurricular = () => {
  return (
    
      <Container fluid className="resume-section">
        <Particle />
        <Container>
         
          <Row className="resume">
           
            <Col md={12} >
            
              <h3 className="resume-heading">Extracurricular Activities</h3>
             
              <Resumecontent
                title="Member of Sir MVIT College’s Dance Team"
                content={[
                  "Represented Sir MVIT in VTU Youth Fest held at Dharwad 2019 in Group Dance.",
                  "Won Inter College Fest “VERVE” for 2 successive year 2018 and 2019."
                  
                ]}
              />
               <Resumecontent
                title="Member of Sir MVIT College’s Painting Club"
                institute={[<div>
                  <h5>Intrested in some artwork? Check out my work --</h5> <i className="far fa-hand-point-right"></i>
                  &nbsp; <a href="https://photos.app.goo.gl/rzCQMRdkXFoEVfUNA" target="_blank"
                  rel="noreferrer">
                     <Button variant="primary"> Artwork <i className="cil-external-link">&nbsp;</i> </Button>
                    </a>
                   </div>
                ]}
              />
            </Col>
          </Row>
            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
                Download Resume
            </Button>
            </Row>
         
        </Container>
      </Container>
    
  );
};

export default Extracurricular;
