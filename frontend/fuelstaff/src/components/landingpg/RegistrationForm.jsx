//Modal Sign In form 
//importing necessary dependencies
import { useState } from "react"; 
import { useRouter } from "next/navigation"; //imported from Next.js to provide routing capabilities
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


//declaring functional component LoginForm
//state variable is used to control whether modal shows or not
//component RegistrationForm takes two props: 'show' and 'closeSignUpForm'
function RegistrationForm({show, closeSignUpForm}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
//Access the router object - the 'useRouter' hook is used to access the router object, which allows for navigation after successful registration. 
  const router = useRouter()

//Server URL is the URL where the registration data will be sent via a POST request
  const SERVER_URL = 'http://localhost:8080/auth/registration'

//'userData' is an object that holds the form data entered by the user.
  const userData = {
    firstName, lastName, employeeId, emailId, password
  }

//Function to handle form submission. The 'handleSubmit' function is called when the form is submitted.

  const handleSubmit = async (e) => {
    e.preventDefault()

//Send a POST request to the server with user data 
    const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

//Handling the response
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
           {/* The registration form */}
          <Form onSubmit={handleSubmit}>
           {/* Form inputs */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name </Form.Label>
              <Form.Control
              autoFocus
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="Enter your 4-digit number"    
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={emailId}
                placeholder="Email"
                onChange={(e) => setEmailId(e.target.value)} 
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordarea"
            >
              <Form.Label>Create Password</Form.Label>
              <Form.Control 
              type='password' 
              rows={1} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder = "Password"
               />
            </Form.Group>
            <Modal.Footer>
          {/* Close button */}
          <Button variant="secondary" onClick={closeSignUpForm}>
            Close
          </Button>
          {/* Submit button */}
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