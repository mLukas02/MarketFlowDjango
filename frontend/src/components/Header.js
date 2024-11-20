import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          {/* Brand/Logo */}
          <LinkContainer to="/">
            <Navbar.Brand>Market Flow</Navbar.Brand>
          </LinkContainer>

          {/* Hamburger Menu for Mobile View */}
          <Navbar.Toggle aria-controls="navbar-content" />

          {/* Collapsible Navbar Content */}
          <Navbar.Collapse id="navbar-content">
            <Nav className="ms-auto">
              {/* Navigation Links */}
              <LinkContainer to="/cart">
                <Nav.Link className="text-uppercase">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="text-uppercase">
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
