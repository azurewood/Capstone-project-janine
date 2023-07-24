'use client'
import React from 'react';
import PayPalButton from '../../../src/components/PayPalButton'
import CheckoutForm from '../../../src/components/Checkout/CheckoutForm'


const CheckoutPage: React.FC = () => {


  return (
    <>
      <div>     
        <CheckoutForm/>
        <PayPalButton/>
      </div>
    </>
  );
};

 export default CheckoutPage; 



