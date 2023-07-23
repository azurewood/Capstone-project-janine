//using context API- creating context object - holds the shopping information to share across the app
//handles frontend logic and state of shopping cart 
import React, { useState, createContext } from 'react' //adding createContext to create a context object
import AllMeals from '../MealCards/AllMeals'


export const CartContext = createContext(null);

  const getDefaultCart = () => {//provide consistent and initial state for the cart -ensure each meal is present in the cart 
    let cart = {};
    for (let i =1; i <= AllMeals.length + 1; i++) {
        cart[i] = 0;
    }
    return cart; 
};

//manage state and logic related to shopping cart using the React context API
export const CartContextProvider = (props) => {
    const[cartItems, setCartItems] = useState([]);
   //Calculates total amount of all items in the cart 
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


//Server URL is the URL where the order data will be sent via a POST request
const SERVER_URL = 'http://localhost:8080/order'

//function to send cart data to server

const sendCartToServer = async(orderID) => {
    fetch (SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderID),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
    .catch((error) => {
      console.error('Error:', error)
    });
};

const addToCart =(orderID) => {
    const itemInfo = AllMeals.find((item) => item.id === orderID);
    if (itemInfo) {
      const {title, price, quantities} = itemInfo
      const totalprice = price * quantities;
      const orderData = {
        title,
        price,
        quantities,
        totalprice,
      };
      sendCartToServer(orderData);
    }
    setCartItems([...cartItems, orderID]);
}

    //CODE THAT ADDS ITEMS TO CART add - can make fetch request to server - to POST cart contents 
    // const addToCart = (orderID) => {
    //     setCartItems(([...cartItems, orderID])); //used to update the state of the cartItems array, containing the added orderID, adding the item to the cart 
    // };

   // update 
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