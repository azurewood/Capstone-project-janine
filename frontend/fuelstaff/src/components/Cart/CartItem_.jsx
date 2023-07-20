//responsible for rendering the individual cart items based on the information received from the context API and display details such as item name, price, image. 
import React from 'react'
import PropTypes from 'prop-types'
import {cartcontext} from './cartcontext'

CartItem_.propTypes = {
    item: PropTypes.object
}

function CartItem_({ item}) {
  return (
    <div className="cartItem">
    <img src={item.image} alt="Item" /> {/* Add alt attribute for accessibility */}
    <div className="description">
      <p>
        <b>{item.title}</b>
      </p>
      <p> Price: NZ$ {item.price}</p>
     
    </div>
    </div>
  )
}

export default CartItem_