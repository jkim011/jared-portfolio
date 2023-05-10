import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import jkLogo from '../assets/jk-logo-red.jpeg';

function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="" className="nav-margins nav-style">
      {/* <Container> */}
        <Navbar.Brand className="nav-brand" as={Link} to="/"><img src={jkLogo} className="nav-logo "/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-items"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto "></Nav>
          <Nav className="nav-items">
            <Nav.Link as={Link} to='/' className="nav-item-link">Home</Nav.Link>
            <Nav.Link as={Link} to='/about' className="nav-item-link">About</Nav.Link>
            <Nav.Link as={Link} to='/portfolio' className="nav-item-link">Portfolio</Nav.Link>           
            <Nav.Link as={Link} to='/contact' className="nav-item-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;