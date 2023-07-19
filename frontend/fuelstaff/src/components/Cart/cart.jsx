//rendering cart items 
import React, {useContext} from 'react'
import { CartContext } from '../Cart/cartcontext'
import {CartItem} from './cartitem'
import CartItem_ from './CartItem_'
import './cart.css'

export const Cart=() => {
    const {cartItems, getTotalCartAmount} = useContext(CartContext)
    const totalAmount = getTotalCartAmount();

  return (
    <div className ="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        {/*should render a list of cart items based on data provided */}
        <div className="cartItems"> 
            {cartItems?.map((item) => (
              <CartItem_ item={item}/>
            ))}
              <div className="TotalPrice"><h5>Total price: {cartItems.reduce((acc, current) => acc + current.price * current.quantities, 0).toFixed(2)}</h5></div>
        </div>
        </div> 
        ) 
 
};
  
