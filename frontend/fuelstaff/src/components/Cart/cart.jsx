import React from 'react'
import AllMeals from '../MealCards/AllMeals'
import { CartContext } from '../Cart/cartcontext'
import {CartItem} from './cartitem'
import './cart.css'

export const cart=() => {
    const {cartItems, getTotalCartAmount} = useContext(CartContext)
    const totalAmount = getTotalCartAmount();

  return (
    <div className ="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {data.data.map((recipes) => {
              if (cartItems[recipes.id] !== 0) {
                return <CartItem key={recipes.id} data={recipes}/>
              } 
              return null;         
            })}
        </div>
        {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
  
