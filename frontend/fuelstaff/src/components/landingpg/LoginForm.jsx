//Modal Sign In form 
import { useState } from "react";
import { useRouter} from "next/navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//declaring functional component LoginForm
//state variable is used to control whether modal shows or not
function LoginForm({show, handleClose}) {
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

//Access the router object - the 'useRouter' hook is used to access the router object, which allows for navigation after successful registration. 
  const router = useRouter()
  
  const SERVER_URL = 'http://localhost:8080/auth/login';

  const user = {
    emailId: emailId,
    password: password
  }

//Function to handle form submission. The 'handleSubmit' function is called when the form is submitted.
const handleSubmit = async (e) => {
  e.preventDefault()

   // Perform client-side validation
   if (emailId.trim() === '' || password.trim() === '') {
    setLoginError('Please enter valid email and password.');
    return;
  }
 
  const response = await fetch(SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });

  if (response.ok) {
    const data = await response.json();
    console.log('LOGIN SUCCESSFUL!', data);
    //redirect user to the dashboard if login is successful
    if (data.result === 200) {
      router.push('../../../app/dashboard');
    }
  } else {
    if (response.status === 401) { //401: client request not completed because it lacks valid authentication creditentials
      setLoginError('Invalid email or password.');
    } else if (response.status === 400) {
      setLoginError('User not found. Please register.');
    }
  }
};

 //output of component
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value= {emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="name@example.com"   
              />
            </Form.Group>
            <Form.Group className="mb-3"controlId="passwordarea">
              <Form.Label>Password</Form.Label>
              <Form.Control 
               type='password'
               rows={1} 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder = "Password"
               />  
            </Form.Group>
            {loginError && <p>{loginError}</p>}
       
        <Modal.Footer>
          {/*Close button*/}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/*Enter button*/}
          <Button variant="dark" type="submit">
            Enter
          </Button>
        </Modal.Footer>
        </Form>
        </Modal.Body>   
      </Modal>
    </>
  );
}
   
// try removing the onChange prop and typing in a field
export default LoginForm;
