//This code sets up a router for handling different routes related to authentication.
//The 'express' module allows for creating and configuring an Express application
//The 'authController' module contains the handler functions for authentication-related routes.

const express = require('express')
const authController = require('../controllers/authController')

//The 'router variable is created by calling the 'express.Router()'method, which creates a new router object.
const router = express.Router()

//Two routers are defined using the 'router' object
//router.post('/registration', authController.registerUser): This route is also associated with the POST HTTP method and the /registration URL path. It is handled by the registerUser function from the authController module.
router.post('/login', authController.loginUser)
router.post('/registration', authController.registerUser)

module.exports = router