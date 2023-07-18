//Performs operations on order data

const Order = require('../models/order');

//TWO CONTROLLER FUNCTIONS for handling orders in a shopping cart 

//  order that needs to be added to the shopping cart
// the function expects a request and response obj as parameters
exports.addOrder = async (req, res) => {
  try {
    const { orderID, title, price, quantities } = req.body; //relevant data for the order is extracted from the req body using object destructuring

    // Calculating the total price of a single order(meal) by multiplication and parsing them into integers
    const totalprice = parseInt(price) * parseInt(quantities);

    //for different meals?? and then calculate the total price by summing up individual prices of different meals and their quantities
    
   // new instance of the 'order' model is made using data and calculation above
    const order = new Order({
      orderID,
      title,
      price,
      quantities,
      totalprice,
    });

    //saving 
    const savedOrder = await order.save();
    //sent as a json response
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Removing an order from the shopping cart
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    //finds and deletes the order by Id
    const deletedOrder = await Order.findByIdAndDelete(orderId); 

    //response options
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    res.status(200).json({ message: 'Meal removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

