import React, { useContext } from 'react';
import { CartContext } from '../Cart/cartcontext';
import CartItem_ from './CartItem_';
import { useRouter } from 'next/navigation';
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const initialValue = 0;
  const TotalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantities, initialValue);

  // Navigate to checkout
  const router = useRouter();

  //Server URL is the URL where the order data will be sent via a POST request
  const SERVER_URL = "http://localhost:8080/order";

  const handleCheckout = () => {
    const order = {
      meals: cartItems.map((meal) => ({meal: meal._id, quantity: meal.quantities }))
    }
    fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      router.push('/checkout/${data._id'); //data being the object returned from creating the order
    })
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {/* Render a list of cart items based on data provided */}
      <div className="cartItems">
        {cartItems?.map((item) => (
          <CartItem_ key={item.orderID} item={item} />
        ))}
        <div className="TotalPrice">
          <h5>Total price: NZD ${TotalPrice}</h5>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

// //rendering cart items 
// import React, {useContext} from 'react';
// import { CartContext } from '../Cart/cartcontext';
// import CartItem_ from './CartItem_';
// import { useRouter } from 'next/navigation';
// import './cart.css';


// export const Cart=() => {
//     const {cartItems, removeFromCart} = useContext(CartContext)

//     //Calculate total price 
//     const initialValue = 0;
//     const TotalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantities, initialValue);

//     //navigate to checkout
//     const router = useRouter();

//     const handleCheckout = () => {
//       router.push('/checkout');
//     }
    
//     const handleRemoveItem = (orderID) => {
//       removeFromCart(orderID);
//     };


//   return (
//         <div className ="cart">
//         <div>
//             <h1>Your Cart Items</h1>
//         </div>
//         {/*should render a list of cart items based on data provided */}
//         <div className="cartItems"> 
//             {cartItems?.map((item) => (
//               <CartItem_ key={item.orderID} item={item}/>
//             ))}
//             {console.log(cartItems, 'cartitems')}
//           <div className="TotalPrice">
//             <h5>Total price: NZD ${TotalPrice}</h5>           
//           </div>
//             <button onClick={handleCheckout}>Checkout</button>
//           </div>
//       </div>
//     ); 
// };

