import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="mb-3"
      style={{
        background: "transparent",
        color: "white",
        fontFamily: "Atlas Grotesk Web",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "1000",
        overflow: "hidden", // Fixes overflow issue
      }}
    >
      <Container fluid>
        <Navbar.Brand className="text-black" href="/">
          Quickfix
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          style={{
            background: "white",
            color: "black",
          }}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Quickfix
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="mx-3 nav-links text-white" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3 nav-links text-white" href="/raise">
                Raise
              </Nav.Link>
              <Nav.Link className="mx-3 nav-links text-white" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="mx-3 nav-links text-white" href="/contact">
                Contact Us 
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
