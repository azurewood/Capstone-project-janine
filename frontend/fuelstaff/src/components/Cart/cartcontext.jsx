//using context API- creating context object - holds the shopping information to share across the app
import React, { useState, createContext } from 'react' //adding createContext to create a context object
import AllMeals from '../MealCards/AllMeals'

//creating store in our application that will keep track of states and functions that needs to be accessed. 
//want to have a state that can access and change state in shop and cart
//creating a new context called ShopContext
export const CartContext = createContext(null);

//creating an object equal to ids of the recipes
//function that will get array and then loop through the array 
//add more products to cart - loop all items in cart
//id will have to be the object id from mongodb? 
const getDefaultCart = () => {
    let cart = {};
    for (let i =1; i <= AllMeals.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

//DEFINE OUR STATES AND EVERYTHING RELATED TO LOGIC IN OUR PROJECT
export const CartContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = AllMeals.find((recipeId) => recipeId === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
    
    //functionality for adding to cart
    //what we want to do with state - will take id of recipe
    const addToCart = (recipeId) => {
        setCartItems((prev) => ({...prev, [recipeId]: prev[recipeId] + 1}));
    };
    //update 
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };

    //functionality to remove from cart
    const removeFromCart = (recipeId) => {
        setCartItems((prev) => ({...prev, [recipeId]: prev[recipeId] - 1}));
    };
    
    //passing in the following between {} that i want access to
    const contextValue = {cartItems, addToCart, updateCartItemCount, removeFromCart, getTotalCartAmount}
    
    console.log(cartItems)
    //pass contextValue into the provider so have access to this outside of component
  return (
   <CartContext.Provider value={contextValue}>
    {props.children}
   </CartContext.Provider>  
  );
};
