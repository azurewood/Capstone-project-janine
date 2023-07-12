import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './landingstyles.css'; //importing css file 
import LoginForm from './LoginForm'; //importing LoginForm component
import RegistrationForm from './RegistrationForm';//importing Registration form component

export default function Landingnavbar() {
  const [loginModal, setLoginModal] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);

  const openModal = () => {
    setLoginModal(true); //showing Login Modal
  }
  
  const handleClose = () => {
    setLoginModal(false);
  }

  const openSignUpForm = () => {
    setOpenRegistration(true);
  }

  const closeSignUpForm = () => {
    setOpenRegistration(false)
  }

  return (
    <>
    <div className="landingnavbar-links-container">
        <Button variant="light" onClick={openModal}>Sign In</Button>{' '}
        <Button variant="dark" onClick={openSignUpForm}>Register</Button>{' '}
    </div>
    <LoginForm show= {loginModal} handleClose= {handleClose} />
    <RegistrationForm show={openRegistration} closeSignUpForm = {closeSignUpForm} />

    </>
  );
}
