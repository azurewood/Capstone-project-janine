import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Landingnavbar() {
  //  const [headerOptions, setheaderOptions] = usetState(false);
  
  return (
    <>
    <div className="landingnavbar-links-container">
        <Button variant="light">Sign In</Button>{' '}
        <Button variant="dark">Register</Button>
    </div>
    </>
  );
}
