import React from "react";
import { Col, Container } from "react-bootstrap";
import "../../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import githubFill from "@iconify-icons/akar-icons/github-fill";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";

const Platforms = () => {
  return (
    <Container className="platformcont">
      <Col>
        <ul className="home-platforms-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/har882"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="GitHub"
            >
              <Icon
                icon={githubFill}
                height={32}
                width={32}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          
          
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/harshita-saxena-7b102016b/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="LinkedIn"
            >
              <Icon
                icon={linkedinFill}
                height={30}
                width={30}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          
          
        </ul>
      </Col>
    </Container>
  );
};

export default Platforms;
