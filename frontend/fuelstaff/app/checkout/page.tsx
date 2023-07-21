'use client'
import React from 'react'
import PayPalScriptProvider from '../../src/components/PayPal'


export default function Checkout() {
  return (
    <div>
      <PayPalScriptProvider></PayPalScriptProvider>
    </div>
  )
}


