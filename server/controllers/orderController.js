//Performs operations on order data

const Order = require('../models/order');

//Fetch a single order by its ID
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById( req.params.orderID )
        if(order) {
          res.status(200).json({ message: 'ORDER FOUND',
          order})
        } else {
          res.status(404).json({ message: 'NO ORDERS FOUND'})
        }
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
    }

// POST - Create a new order
exports.postOrder = async (req, res) => {
  try {
    const {  title, price, quantities } = req.body; //relevant data for the order is extracted from the req body using object destructuring

    // Calculating the total price of a single order(meal) by multiplication and parsing them into integers
    const totalprice = parseInt(price) * parseInt(quantities);
    
   // new instance of the 'order' model is made using data and calculation above
    const order = new Order({
      title,
      price,
      quantities,
      totalprice,
    });
    console.log(order)

    //saving 
    const savedOrder = await order.save();
    //sent as a json response
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Remove an order from the shopping cart
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

