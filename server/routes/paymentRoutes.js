const express = require('express');
const router = express.Router();
const paymentController = require ('../controllers/paymentController.js');

//never use GET when sending sensitive information
//'addPayment and getPaymentById' came from paymentController.js

router.post('/payments', paymentController.addPayment);
router.get('/payments/:paymentId', paymentController.getPaymentById);

module.exports = router;