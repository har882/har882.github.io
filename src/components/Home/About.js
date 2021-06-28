import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import "../../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";


const About = () => {
  return (
   
      <Container fluid className="about-section">
        <Particle />
        
        <Container>
          
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
         
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack iconName="devicon-java-plain" 
            hoverIcon="devicon-java-plain-wordmark"/>
            <Techstack
              iconName="devicon-spring-plain"
              hoverIcon="devicon-spring-plain-wordmark"
            />
            <Techstack iconName="devicon-javascript-plain" />
           
            <Techstack
              iconName="devicon-python-plain"
              hoverIcon="devicon-python-plain-wordmark"
            />
            <Techstack
              iconName="devicon-html5-plain"
              hoverIcon="devicon-html5-plain-wordmark"
            />
            <Techstack
              iconName="devicon-css3-plain"
              hoverIcon="devicon-css3-plain-wordmark"
            />
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack
              iconName="devicon-react-original"
              hoverIcon="devicon-react-original-wordmark"
            />
            
            <Techstack
              iconName="devicon-bootstrap-plain"
              hoverIcon="devicon-bootstrap-plain-wordmark"
            />
           
            <Techstack
              iconName="devicon-mysql-plain"
              hoverIcon="devicon-mysql-plain-wordmark"
            />
          </Row>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            
            <Techstack
              iconName="devicon-git-plain"
              hoverIcon="devicon-git-plain-wordmark"
            />
            <Techstack
              iconName="devicon-github-original"
              hoverIcon="devicon-github-original-wordmark"
            />
            <Techstack
              iconName="devicon-vscode-plain"
              hoverIcon="devicon-vscode-plain-wordmark"
            />
            <Techstack
              iconName="devicon-intellij-plain"
              hoverIcon="devicon-intellij-plain-wordmark"
            />
            
            <Techstack iconName="cib-postman"/>
            
          </Row>
          
        </Container>
      </Container>
  
  );
};

export default About;
