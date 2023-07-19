const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//GET
router.get('/:orderId', orderController.getOrder);

//POST is used to send data to a server to create/update a resource
//Data sent to the server with POST is stored in the request body of the HTTP request
// @route 
router.post('/', orderController.addOrder);

//Delete 
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
