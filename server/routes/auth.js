const express = require('express')
const authController = require('../controllers')

const router = express.Router()


router.post('/login')
router.post('/registration', authController.registerUser)


module.exports = router