// //each cart item in the shopping cart - creating + and - button so users can add and remove items 
// import React, { useContext } from "react";
// import { CartContext } from "../../components/Cart/cartcontext";
// import './cart.css';

// export const CartItem = (props) => {
//   const { id, title, price, image } = props.data; // Destructure the props directly
//   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
//     useContext(CartContext);

//   const handleRemoveFromCart = () => {
//     removeFromCart(id);
//   };

//   const handleAddToCart = () => {
//     addToCart(id);
//   };

//   const handleItemCountChange = (e) => {
//     const count = Number(e.target.value);
//     updateCartItemCount(count, id);
//   };

//   return (
//     <div className="cartItem">
//       <img src={image} alt="Item" /> {/* Add alt attribute for accessibility */}
//       <div className="description">
//         <p>
//           <b>{title}</b>
//         </p>
//         <p> Price: ${price}</p>
//         <div className="countHandler">
//           <button onClick={handleRemoveFromCart}> - </button>
//           <input
//             value={cartItems[id] || 0}
//             onChange={handleItemCountChange}
//             type="number" // Specify the input type as number
//             min="0" // Set a minimum value if required
//           />
//           <button onClick={handleAddToCart}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };
