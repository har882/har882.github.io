import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home.css";
import Particle from "../Particle";
import HomeTwo from "./HomeTwo";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Type from "./Type";
import Platforms from "./Platforms";
import Greeting from "./Greeting";
import Extracurricular from "./Extracurricular";


const Home = () => {
  return (
    <section className="sect">
      
        <Container fluid className="home-section" id="/">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col lg={7} className="home-header">
                <Greeting />

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name">{" HARSHITA"}</strong>
                  <strong className="main-name surname">{" SAXENA."}</strong>
                </h1>

                <Container className="typeContainer">
                  <h6>
                    <Type />
                  </h6>
                </Container>
                <Platforms />
              </Col>

              
            </Row>
          </Container>
        </Container>
        <HomeTwo />
        <Resume />
        <About />
        <Projects />
    
      <Extracurricular />
    </section>
  );
};

export default Home;
