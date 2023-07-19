import React, {useContext} from 'react'
import AllMeals from '../MealCards/AllMeals'
import { CartContext } from '../Cart/cartcontext'
import {CartItem} from './cartitem'
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
              <h5>{item}</h5>
            ))}
              
        </div>
        </div> 
        ) 
 
};
  
