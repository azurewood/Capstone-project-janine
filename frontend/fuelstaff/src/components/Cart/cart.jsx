//rendering cart items 
import React, {useContext} from 'react'
import { CartContext } from '../Cart/cartcontext'
import {CartItem} from './cartitem'
import CartItem_ from './CartItem_'
import './cart.css'

export const Cart=() => {
    const {cartItems, getTotalCartAmount} = useContext(CartContext)
    // const totalAmount = getTotalCartAmount();

    //Calculate total price 
    // const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => {
      console.log("Item price:", item.price);
      console.log("Item quantity:", item.quantity);
      const price = Number(item.price);
      const quantity = Number(item.quantity);
      if (Number.isFinite(price) && Number.isFinite(quantity)) {
        return acc + price * quantity;
      }
      return acc;
    }, 0);
  
    console.log("Total price:", totalPrice);

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
            <div className="TotalPrice">
          <h5>Total price: {totalPrice.toFixed(2)}</h5>
          </div>
        </div>
      </div> 
    ) 
 
};
  
