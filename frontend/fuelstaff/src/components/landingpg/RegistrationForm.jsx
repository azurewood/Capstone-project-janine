//Modal Sign In form 
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//declaring functional component LoginForm
//state variable is used to control whether modal shows or not
function RegistrationForm({show, closeSignUpForm}) {
  
 //output of component
  return (
    <>
    <Modal show={show} onHide={closeSignUpForm}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name </Form.Label>
              <Form.Control
                type="firstname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="lastname"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordarea"
            >
              <Form.Label>Create Password</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSignUpForm}>
            Close
          </Button>
          <Button variant="dark" onClick={closeSignUpForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
   
// try removing the onChange prop and typing in a field
export default RegistrationForm;