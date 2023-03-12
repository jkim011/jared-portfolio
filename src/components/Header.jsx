import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import githubLogo from '../assets/logo-images/githubLogo.png';
import linkedinLogo from '../assets/logo-images/linkedinLogo.png';
import emailLogo from '../assets/logo-images/emailLogo.png'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Jared Kim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="https://github.com/jkim011/" target="_blank" rel="noreferrer"><img className="social-links" src={githubLogo} /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jared-kim/" target="_blank" rel="noreferrer"><img className="social-links" src={linkedinLogo} /></Nav.Link>
            <Nav.Link href="mailto:jaredkim011@gmail.com" ><img className="social-links" src={emailLogo} /></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;