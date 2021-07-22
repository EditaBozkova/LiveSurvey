import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBa = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/ui/">Live-survey</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/ui/">Home</Nav.Link>
        <NavDropdown title="Ankety" id="Survey-menu">
          <NavDropdown.Item href="/ui/create" tabIndex="-1" aria-disabled="true">Vytvořit anketu</NavDropdown.Item>
          <NavDropdown.Item href="/ui/album" tabIndex="-1" aria-disabled="true">Prohlížet ankety</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item disabled href="#" tabIndex="-1" aria-disabled="true">Smazat anketu</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="https://github.com/EditaBozkova/LiveSurvey">Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <a href="https://github.com/EditaBozkova">@EditaBozkova  </a>
          <a href="https://github.com/Pompino">@Pompino </a>
          </Navbar.Text>
        </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBa;