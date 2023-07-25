'use client'
import React from 'react';
import PayPalButton from '../../../src/components/PayPalButton'
import CheckoutForm from '../../../src/components/Checkout/CheckoutForm'
import DashNavBar from '@/src/components/dnavbar/dashboardnavbar';

const CheckoutPage: React.FC = () => {


  return (
    <>
    <div><DashNavBar/></div>
      <div> 
        <CheckoutForm/>
        <PayPalButton/>
      </div>
    </>
  );
};

 export default CheckoutPage; 



