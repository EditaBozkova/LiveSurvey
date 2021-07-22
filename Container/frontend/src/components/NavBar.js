// Import používaných knihoven
import React from 'react';

// Import používaných komponent
import { Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

// Komponenta pro zobrazení Navigation Bar (horní lišty)
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/ui/">Live-survey</Navbar.Brand> {/*Horní logo*/}
    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
    <Navbar.Collapse id="basic-navbar-nav"> {/*Tři tlačítka*/}
      <Nav className="mr-auto">
        <Nav.Link href="/ui/">Home</Nav.Link>
        <NavDropdown title="Ankety" id="Survey-menu"> {/*Rozbalovací menu ankety*/}
          <NavDropdown.Item href="/ui/create" tabIndex="-1" aria-disabled="true">Vytvořit anketu</NavDropdown.Item>
          <NavDropdown.Item href="/ui/album" tabIndex="-1" aria-disabled="true">Prohlížet ankety</NavDropdown.Item>
          <NavDropdown.Divider /> {/*Rozdělovací čára*/}
          <NavDropdown.Item disabled href="#" tabIndex="-1" aria-disabled="true">Smazat anketu</NavDropdown.Item> {/*in progress...*/}
        </NavDropdown>
        <Nav.Link href="https://github.com/EditaBozkova/LiveSurvey">Github</Nav.Link> {/*Odkaz na repositář*/}
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end"> {/*Dva odkazy na github profily*/}
          <Navbar.Text>
          <a href="https://github.com/EditaBozkova">@EditaBozkova  </a>
          <a href="https://github.com/Pompino">@Pompino </a>
          </Navbar.Text>
        </Navbar.Collapse>
  </Navbar>
  );
};

export default NavBar;