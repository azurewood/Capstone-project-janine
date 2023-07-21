//nav bar without shopping cart 
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';
import './dnavbar.css';

//Dashboard Navigation bar 
export default function PagesNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="/dashboard">FuelStaff</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about"className="navlink">About</Nav.Link>
          <Nav.Link href="#action1"className="navlink">Education</Nav.Link>
          <Nav.Link href="#action2"className="navlink">News</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#action4">
            Welcome
          </Nav.Link>
          <Nav.Link href="#action3">
            <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
          <Button variant="Light" Link href="/">Logout</Button>{' '}
          {/* When user clicks the Logout button, user is redirected to Landing page */}
        </Nav>
      </Container>
    </Navbar>
  );
}