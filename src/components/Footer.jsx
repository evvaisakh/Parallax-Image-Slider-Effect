import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <footer className="bg-body-secondary pt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>CONTACT</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Find a Dealer</a></li>
                <li><a href="#" className="text-decoration-none">Request a Test Drive</a></li>
                <li><a href="#" className="text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-decoration-none">Contact Us</a></li>
              </ul>
              <div className="social-links">
                <a href="https://www.facebook.com/bmwindia" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook me-3"></i></a>
                <a href="https://www.instagram.com/bmwindia_official/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram me-3"></i></a>
                <a href="https://www.youtube.com/user/bmwindia" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube me-3"></i></a>
                <a href="https://in.linkedin.com/showcase/bmw-india/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin me-3"></i></a>
                <a href="https://twitter.com/bmwindia" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter me-3"></i></a>
              </div>
            </Col>
            <Col md={3}>
              <h5>QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Build your BMW</a></li>
                <li><a href="#" className="text-decoration-none">BMW Financial Services</a></li>
                <li><a href="#" className="text-decoration-none">BMW Safety</a></li>
                <li><a href="#" className="text-decoration-none">EMI Calculator</a></li>
                <li><a href="#" className="text-decoration-none">BMW Premium Selection (Used Cars)</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>EXPERIENCE BMW</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">BMW Group</a></li>
                <li><a href="#" className="text-decoration-none">BMW Excellence Club</a></li>
                <li><a href="#" className="text-decoration-none">BMW Motorrad</a></li>
                <li><a href="#" className="text-decoration-none">Charging Network</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>LEGAL</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">Legal Disclaimer/Imprint</a></li>
                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              </ul>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col md={4}>
              <p>&copy; BMW AG 2024</p>
            </Col>
            <Col md={8}>
              <div className='d-flex justify-content-end'>
                <a href="#" className="text-decoration-none px-3">Legal Disclaimer/Imprint</a>
                <a href="#" className="text-decoration-none px-3">Privacy Policy</a>
                <a href="#" className="text-decoration-none px-3">Contact Us</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
export default Footer