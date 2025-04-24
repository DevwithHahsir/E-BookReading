import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Import Font Awesome search icon
import "./navbar.css";

import "aos/dist/aos.css";
import Search from "../searcInput/Search";

function AppNavbar() {
  return (
    <div className="nav-main-container">
      <Navbar expand="lg" fixed="bottom" className="bottom-navbar">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            Bookly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#gener">Genre</Nav.Link>
              <Nav.Link href="#auth">Authors</Nav.Link>
              <Nav.Link href="#romantic">Romantic</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <Search/>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
