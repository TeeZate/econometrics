import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar-light fixed-top">
      <Container>
      <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
            src="/images/logo192.png"
            alt="Econometrix Logo"
            height="50"
            className="me-2"
        />
        Econometrix
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="#features">Features</Nav.Link>
            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="#about">About</Nav.Link>
            <Nav.Item>
              <Nav.Link as={Link} to="#signup" className="btn btn-primary text-white ms-2">Get Started</Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
