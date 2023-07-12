//Modal Sign In form 
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


//declaring functional component LoginForm
//state variable is used to control whether modal shows or not
function RegistrationForm({show, closeSignUpForm}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const SERVER_URL = 'http://localhost:8080/auth/registration'

  const userData = {
    firstName, lastName, employeeId, emailId, password
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if (response.ok) {
        const data = await response.json();
        console.log('USER REGISTERED!', data)
        router.push('/')
    } else {
        if (response.status === 400) {
            const data = await response.json()
            console.log('ERROR in REGISTRATION', data.message)
        }
    }

  }

 //output of component
  return (
    <>
    <Modal show={show} onHide={closeSignUpForm}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name </Form.Label>
              <Form.Control
              autoFocus
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="enter your 4-digit number"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={emailId}
                placeholder="name@example.com"
                onChange={(e) => setEmailId(e.target.value)} 
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordarea"
            >
              <Form.Label>Create Password</Form.Label>
              <Form.Control type='password' rows={1} value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={closeSignUpForm}>
            Close
          </Button>
          <Button variant="dark" type='submit'>
            Submit
          </Button>
        </Modal.Footer>
        </Form>
        </Modal.Body>   
      </Modal>
    </>
  );
}
   
// try removing the onChange prop and typing in a field
export default RegistrationForm;