import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  // active style for nav
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      {/* navbar section */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Adven<span className="text-success">Tour</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} activeStyle={activeStyle} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} activeStyle={activeStyle} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} activeStyle={activeStyle} to="/services">
                Services
              </Nav.Link>

              {/* this button are showing only when user logged in */}
              {user.email ? (
                <>
                  <Nav.Link
                    as={Link}
                    activeStyle={activeStyle}
                    to="/myorder"
                  >
                    MyOrder
                  </Nav.Link>
                  <Nav.Link as={Link} activeStyle={activeStyle} to="/manage">
                    ManageAllOrder
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    activeStyle={activeStyle}
                    to="/addservice"
                  >
                    Add A Service
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text> */}
            {user.email && <p style={{ color: "white" }}>{user.displayName}</p>}
            {/* </Navbar.Text> */}
            {user.email ? (
              <Button
                onClick={logOut}
                variant="outline-light"
                className="mx-1 p-1"
              >
                Sign out
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline-light" className="mx-2 p-1">
                  Sign In
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
