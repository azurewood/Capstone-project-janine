const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//No GET or PUT included

//POST is used to send data to a server to create/update a resource
//Data sent to the server with POST is stored in the request body of the HTTP request
router.post('/orders', orderController.addOrder);

//Delete 
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
