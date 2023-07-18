const express = require('express');
const router = express.Router();
const paymentController = require ('../controllers/paymentController.js');

//never use GET when sending sensitive information
router.post('/payments', paymentController.createPayment);
router.get('/payments/:paymentId', paymentController.getPaymentById);

module.exports = router;