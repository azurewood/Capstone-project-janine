import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './dnavbar.css';

function DashNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="#">FuelStaff</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action1">Education</Nav.Link>
            <Nav.Link href="#action1">Events</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
          </Nav>
        {/* <div className ="search-container">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What would you like to eat today?"
              className="searchbar"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashNavBar;

