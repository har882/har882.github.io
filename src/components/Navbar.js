import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import { NavbarBrand, NavItem} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import "../styles/Menu.css";
import Menu from "./Menu";
import audio from '../assets/tick.mp3';

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const start = () => {
    new Audio(audio).play();
  }

  const scrollHandler = () => {
    if (window.scrollY >= 70) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <NavbarBrand href="/">
          <h3 className="brand">
            <b>{"{ Harshita }"}</b>
          </h3>
        </NavbarBrand>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
            start();
          }}
        >
          <Menu onClick={start}/>
        </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <NavItem>
            <Link
              className="Navlink"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <i className="fas fa-home"></i> Home
            </Link>
            </NavItem>
            <NavItem>
            <Link
              className="Navlink"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <i className="fas fa-user"></i> About
              </Link>
            </NavItem>
            <NavItem>
            <Link
              className="Navlink"
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <i className="fas fa-file"></i> Resume
            </Link>
            </NavItem>

            <NavItem>
            <Link
              className="Navlink"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <i className="fas fa-code-branch"></i> Projects
              </Link>
            </NavItem>
 
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
