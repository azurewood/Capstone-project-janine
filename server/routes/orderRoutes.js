const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//GET a single order by ID
router.get('/:orderId', orderController.getOrder);

//POST to create a new order/add order to cart (see postOrder in controller)
router.post('/', orderController.postOrder);

//Delete an order by ID
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
