import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import "../App.css";

function AppNavbar() {
  return (
    // <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ padding: "0px" }}>
          <img
            src={"/logo.png"}
            width="120"
            height="60"
            alt="Dario and Sarajevo logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "black", fontWeight: 600 }}>
              Početna
            </Nav.Link>
            <Nav.Link href="about" style={{ color: "black", fontWeight: 600 }}>
              O Projektu
            </Nav.Link>
            {/* <Nav.Link href="contact">Kontakt</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
