import React from 'react';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ImgLogo from '../Img/Jsssl 2.png'

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
    
    <Navbar.Brand href="#home" className="pl-2" ><img src={ImgLogo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="me-auto pl-5">
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#features">Training School</Nav.Link>
      <Nav.Link href="#pricing">Our Clients</Nav.Link>
      <Nav.Link href="#features">Careers</Nav.Link>
      <Nav.Link href="#pricing">News & Events</Nav.Link>
      
    </Nav>
    <Nav className="pl-5">
     <Button variant="outline-danger">Contact Us</Button>
    </Nav>
  </Navbar.Collapse>
    
  </Container>
</Navbar>
        </div>
    );
};

export default Header;