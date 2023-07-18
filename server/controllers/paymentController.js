const Order = require('../models/order');
const Payment = require ("../models/payment");

//post(send data to server), update (edit payment details) and delete 

// Get payment by ID
exports.getPaymentById = async (req, res) => {
    try {
      const { paymentId } = req.params;
  
      const payment = await Payment.findById(paymentId);
  
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
  
      res.status(200).json(payment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//Create a payment 
exports.addPayment = async (req, res) => {
    try {
        const {orderId, amount, paymentMethod, paymentStatus } = req.body;

        const order = await Order.findById(orderId);

        if(!order) {
            return res.status(404).json({error: 'Order not found'});
        }

    const payment = new Payment ({
        orderId,
        amount,
        paymentMethod,
        paymentStatus,
    });

    const savedPayment = await payment.save();

        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

