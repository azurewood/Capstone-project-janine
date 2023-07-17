const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.addOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
