import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/manage">Manage Inventory</Nav.Link>
              <Nav.Link as={Link} to="/add">Add Item</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">My Items</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;