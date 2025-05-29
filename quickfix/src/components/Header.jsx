import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Header.css"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../index'; 

function Header() {
  // Access the translation function, current language, and language setter from context
  const { t, lang, setLang } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Navbar
      expand="lg"
      className="mb-3"
      style={{
        background: "#fff",
        color: "white",
        fontFamily: "Atlas Grotesk Web",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "1000",
        overflow: "hidden", 
      }}
    >
      <Container fluid>
        {/* Brand Name */}
        <Navbar.Brand className="text-black" as={NavLink} to="/"> {/* Use as={NavLink} for react-router-dom integration */}
          {t('Header', 'brand_name')} 
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
            {/* Offcanvas Title */}
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              {t('Header', 'brand_name')} {/* Translated Brand Name in Offcanvas */}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* Navigation Links */}
              <Nav.Link as={NavLink} to="/home" className="mx-3 nav-links text-white">
                {t('Header', 'home_link')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/raise" className="mx-3 nav-links text-white">
                {t('Header', 'raise_request_link')} {/* Using raise_request_link for clarity */}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="mx-3 nav-links text-white">
                {t('Header', 'about_link')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="mx-3 nav-links text-white">
                {t('Header', 'contact_link')}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/status" className="mx-3 nav-links text-white">
                {t('Header', 'check_status_link')}
              </Nav.Link>

              {/* Language Selector */}
              <select
                onChange={handleLanguageChange}
                value={lang}
                className="ms-3 p-2 rounded" 
                style={{
                  backgroundColor: '#020170', // Slightly transparent white for better visibility
                  color: 'white',
                  border: '1px solid #020170',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिन्दी</option>
              </select>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;