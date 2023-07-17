const Order = require('../models/order');

// Add an order to the shopping cart
exports.addOrder = async (req, res) => {
  try {
    const { employeeID, title, price, quantities } = req.body;

    // Calculate total price
    const totalprice = parseInt(price) * parseInt(quantities);

    const order = new Order({
      employeeID,
      title,
      price,
      quantities,
      totalprice,
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove an order from the shopping cart
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    res.status(200).json({ message: 'Meal removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

