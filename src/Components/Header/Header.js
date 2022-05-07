import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>

              {
                user && <>
                  <Nav.Link as={Link} to="/manage">Manage Inventory</Nav.Link>
                  <Nav.Link as={Link} to="/add">Add Item</Nav.Link>
                </>
              }


            </Nav>
            <Nav>

              {
                user ? <>
                  <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                  <button onClick={handleSignOut}>signout</button>
                </> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;