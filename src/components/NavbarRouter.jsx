import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavbarRouter() {
  return <>
        <Navbar expand="md" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='logo'>GUVI</Navbar.Brand>
          <Nav className="me-auto" variant="underline" activeKey="/">  
          <Link to='/' className="nav-link">ALL</Link>
          <Link to='/full-stack' className="nav-link">FULL STACK DEVELOPMENT</Link>
          <Link to='/data-science' className="nav-link">DATASCIENCE</Link>
          <Link to='/cyber-security' className="nav-link">CYBER SECURITY</Link>
          <Link to='/career' className="nav-link">CAREER</Link>
          </Nav>
        </Container>
      </Navbar>
  
  </>
}

export default NavbarRouter