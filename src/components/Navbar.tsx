import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "../App.css";
import { useTranslation } from "react-i18next";

function AppNavbar() {
  const { t } = useTranslation();
  return (
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
              {t("menu.home")}
            </Nav.Link>
            <Nav.Link href="about" style={{ color: "black", fontWeight: 600 }}>
              {t("menu.about")}
            </Nav.Link>
            {/* <Nav.Link href="contact">{t("contact_us")}</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
