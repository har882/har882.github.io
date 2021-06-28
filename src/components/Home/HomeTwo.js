import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myp from "../../assets/myp.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Harshita_Saxena_Resume.pdf";


const HomeTwo = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col sm={12} lg={4} className="myAvtar" >
            
              <img
                src={myp}
                className="img-fluid face"
                alt="avatar"
               
              />
           
          </Col>

          <Col sm={12} lg={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi Everyone, I am <span className="purple">Harshita Saxena </span>
            , a third year undergraduate pursuing B.E. in Information Science and engg from <span className="purple">Sir M. Visvesvaraya Institute of Technology, Bangalore.</span> 
            <br />
             I am Experienced in Web Development.
             <br />
    
              Currenty I am working as a Target Ignite Plus Trainee and in this course of time I have developed my interest in 
              <i>
                <b className="purple">
                  {" "}
                  Big Data processing and analytics.{" "}
                </b>
              </i>
              <br />
              <br />
            <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
                Download Resume
            </Button>
            </Row>
              <br />
              
           
            </p>
          </Col>
          
        </Row>
       
      </Container>
    </Container>
  );
};
export default HomeTwo;
