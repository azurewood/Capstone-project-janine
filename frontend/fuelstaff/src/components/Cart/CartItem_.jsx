import React from 'react'
import PropTypes from 'prop-types'

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
      <div className="countHandler">
        <button onClick={() => {}}> - </button>
        <input
          value=""
          onChange={() => {}}
          type="number" // Specify the input type as number
          min="0" // Set a minimum value if required
        />
        <button onClick={()=>{}}> + </button>
      </div>
    </div>
  </div>
  )
}

export default CartItem_