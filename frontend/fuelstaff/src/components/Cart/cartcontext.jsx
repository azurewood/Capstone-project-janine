//using context API- creating context object - holds the shopping information to share across the app
//handles frontend logic and state of shopping cart
import React, { useState, createContext } from "react"; //adding createContext to create a context object
import AllMeals from "../MealCards/AllMeals";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  //provide consistent and initial state for the cart -ensure each meal is present in the cart
  let cart = {};
  for (let i = 1; i <= AllMeals.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

//manage state and logic related to shopping cart using the React context API
export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (mealToBeAdded) => {
    const isAlreadyInCart = cartItems.some((mealAlreadyInCart) => mealAlreadyInCart._id === mealToBeAdded._id)
    let newCartItems;
    if (isAlreadyInCart) {
      newCartItems = cartItems.map((mealAlreadyInCart) => {
        console.log('mealAlreadyInCart', mealAlreadyInCart);
        return mealAlreadyInCart._id === mealToBeAdded._id ? { ...mealAlreadyInCart, quantities: mealAlreadyInCart.quantities + 1 } : mealAlreadyInCart
      })
    } else {
      newCartItems = [...cartItems, { ...mealToBeAdded }]
    }
    console.log('newCartItems: ', newCartItems)
    setCartItems(newCartItems);
  };

  //functionality to remove from cart
  //the removeFromCart function is designed to remove an item with a specific orderID from the cart by decrementing its quantity by 1.
  //...prev - creates copy of current state of cart items
  const removeFromCart = (mealId) => {
    setCartItems(cartItems.filter((item) => item._id !== mealId));
  };

  //checkout
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  //passing in the following between {} that i want access to
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    checkout,
  };

  console.log(cartItems);
  //pass contextValue into the provider so have access to this outside of component
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
