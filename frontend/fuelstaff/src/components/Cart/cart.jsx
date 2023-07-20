//rendering cart items 
import React, {useContext} from 'react';
import { CartContext } from '../Cart/cartcontext';
import CartItem_ from './CartItem_';
import { useRouter } from 'next/navigation';
import './cart.css';

export const Cart=() => {
    const {cartItems, getTotalCartAmount} = useContext(CartContext)

    //Calculate total price 
    const initialValue = 0;
    const TotalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantities, initialValue);
    
    //navigate to checkout
    const router = useRouter();

    const handleCheckout = () => {
      router.push('/checkout');
    }

  return (
    <div className ="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        {/*should render a list of cart items based on data provided */}
        <div className="cartItems"> 
            {cartItems?.map((item) => (
              <CartItem_ key={item.orderID} item={item}/>

            ))}
            {console.log(cartItems, 'cartitems')}
          <div className="TotalPrice">
            <h5>Total price: {TotalPrice}</h5>
           
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div> 
    )  
};
