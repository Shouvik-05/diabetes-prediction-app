// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Diabetes Predictor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#features">Features</NavDropdown.Item>
              <NavDropdown.Item href="#team">Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
