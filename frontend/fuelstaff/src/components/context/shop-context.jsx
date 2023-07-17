import React from 'react'

//creating store in our application that will keep track of states and functions that needs to be accessed. 
//want to have a state that can access and change state in shop and cart
//export to AllMeals.jsx
// export const ShopContext = createContext(null);

//creating an object equal to ids of the recipes
//function that will get array and then loop through the array 
const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < recipes.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const[cartItems, setCartItems] = useState(getDefaultCart());

    //functionality for adding to cart
    //what we want to do with state - will take id of recipe
    const addToCart = (recipeId) => {
        setCartItems((prev) => ({...prev, [recipeId]: prev[recipeId] + 1}));
    };
    
    //functionality to remove from cart
    const removeFromCart = (recipeId) => {
        setCartItems((prev) => ({...prev, [recipeId]: prev[recipeId] - 1}));
    };

    const contextValue = {cartItems, addToCart, removeFromCart}
    
    //pass this all into the provider so have access to this outside of component
  return (
   <ShopContext.Provider value={contextValue}>
    {props.children}
   </ShopContext.Provider>  
  );
};
