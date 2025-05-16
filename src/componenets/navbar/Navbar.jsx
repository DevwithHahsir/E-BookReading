import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // ✅ import NavLink
import "./navbar.css";
import Search from "../searcInput/Search";

function AppNavbar() {
  return (
    <div className="nav-main-container">
      <Navbar expand="lg" fixed="bottom" className="bottom-navbar">
        <Container>
          <Navbar.Brand className="brand" href="/">
            Bookly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/gener" className="nav-link">
                Genre
              </NavLink>
              <NavLink to="/authors" className="nav-link">
                Authors
              </NavLink>
              {/* <NavLink to="/romantic" className="nav-link">
                Romantic
              </NavLink> */}
            </Nav>
            <Form className="d-flex align-items-center">
              <Search />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
