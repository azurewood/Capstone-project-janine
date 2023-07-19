
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Cart from '../Cart/cart';
import './dnavbar.css';

//Dashboard Navigation bar 
export default function DashNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="#">FuelStaff</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#action1"className="navlink">About</Nav.Link>
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
          {/* when clicked, the button takes the user to the cart page*/}
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            title={<FontAwesomeIcon icon={faShoppingCart} />}
            className="shopping-cart-dropdown"
            data-bs-theme="dark"
          >
            <Dropdown.Item href="#/action-1" active>
            <Cart/> {/*cart component here*/}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Checkout button goes here</Dropdown.Item>
          </DropdownButton>
          <Button variant="Light" Link href="/">Logout</Button>{' '}
          {/* When user clicks the Logout button, user is redirected to Landing page */}
        </Nav>
      </Container>
    </Navbar>
  );
}



