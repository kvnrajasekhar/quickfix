import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar expand="lg" className="float-right" data-bs-theme="dark" bg='dark' style={{background: 'linear-gradient(to right, #000428, #004e92)'}}>
            <Container>
                <Navbar.Brand href="#home">quickfix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=''>
                    <Nav className="ms-auto gap-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">Raise</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
