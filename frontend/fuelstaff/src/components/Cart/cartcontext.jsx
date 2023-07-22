//using context API- creating context object - holds the shopping information to share across the app
//handles frontend logic and state of shopping cart 
import React, { useState, createContext, useRouter } from 'react' //adding createContext to create a context object
import AllMeals from '../MealCards/AllMeals'


export const CartContext = createContext(null);

  const getDefaultCart = () => {
    let cart = {};
    for (let i =1; i <= AllMeals.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

//DEFINE OUR STATES AND EVERYTHING RELATED TO LOGIC IN OUR PROJECT
export const CartContextProvider = (props) => {
    const[cartItems, setCartItems] = useState([]);

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      cartItems.forEach((itemAmount, orderID) => {
          if (itemAmount > 0) {
              let itemInfo = AllMeals.find((item) => item.id === orderID); // Assuming AllMeals has an 'id' property
              if (itemInfo && itemInfo.price) {
                  totalAmount += itemAmount * itemInfo.price;
              }
          }
      });
      return totalAmount;
  };

// function cartcontext ({show, close}) {
//   const [title, setTitle] =useState('')
//   const [price, setPrice] =useState('')
//   const [quantities, setQuantities] =useState('')
//   const [totalprice, setTotalPrice] =useState('')
//   const [orderError, setOrderError] = useState('')
//   const [orderSubmitted, setOrderSubmitted] = useState('')
//  }

//  //access the router object
// const router= useRouter()

// //Server URL is the URL where the order data will be sent via a POST request
// const SERVER_URL = 'http://localhost:8080/order'

// const orderData = {
//   title: title,
//   price: price,
//   quantities: quantities,
//   totalprice: totalprice,
// }


    //add - can make fetch request to server - to POST cart contents 
    const addToCart = (orderID) => {
      
        setCartItems(([...cartItems, orderID])); //used to update the state of the cartItems array, containing the added orderID, adding the item to the cart 
    };
    //update 
    const updateCartItemCount = (newAmount, orderID) => {
        setCartItems((prev) => ({ ...prev, [orderID]: newAmount }));
      };

    //functionality to remove from cart
    //the removeFromCart function is designed to remove an item with a specific orderID from the cart by decrementing its quantity by 1.
    //...prev - creates copy of current state of cart items
    const removeFromCart = (orderID) => {
      setCartItems(cartItems.filter((item)=>item._id !== orderID));

    };
    
    //checkout
    const checkout = () => {
      setCartItems(getDefaultCart());
    };
  
    //passing in the following between {} that i want access to
    const contextValue = {cartItems, addToCart, updateCartItemCount, removeFromCart, getTotalCartAmount, checkout}
    
    console.log(cartItems)
    //pass contextValue into the provider so have access to this outside of component
  return (
   <CartContext.Provider value={contextValue}>
    {props.children}
   </CartContext.Provider>  
  );
};