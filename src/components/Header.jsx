import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img
            src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="BMW logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold nav-underline">
              <Nav.Link href="#">Models</Nav.Link>
              <Nav.Link href="#">Electric</Nav.Link>
              <Nav.Link href="#">Configurator</Nav.Link>
              <Nav.Link href="#">Vist Online Shop</Nav.Link>
              <Nav.Link href="#">More BMW</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#"><i style={{ height: '18px' }} className="fa-solid fa-cart-shopping"></i></Nav.Link>
              <Nav.Link href="#"><i style={{ height: '18px' }} className="fa-solid fa-location-dot"></i></Nav.Link>
              <Nav.Link href="#"><i style={{ height: '18px' }} className="fa-solid fa-magnifying-glass"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header