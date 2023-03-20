import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="nav-margins" style={{backgroundColor:"purple"}} >
      <Container>
        <Navbar.Brand href="/">Jared Kim</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/skills'>Skills</Nav.Link>
            <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>           
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;