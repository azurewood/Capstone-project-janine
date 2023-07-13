//when the person registers
//can put both sign in and register form
//importing necessary modules 
"use strict"
let Models = require("../models");
const mongoose = require('mongoose');
const asyncHandler = require('../middleware/asyncHandler') //handles asynchronous functions 


//desc      Registeration for user
//route     POST auth/registration
//access    Public
//'register user' asynchronous function is exported and serves as the controller for the registration route. 
exports.registerUser = asyncHandler(async (req, res) => {
 const {firstName, lastName, emailId, employeeId, password } = req.body //retrieves user data from the request body
 const userData = await Models.User.findOne({emailId}) //(RegistrationForm.jsx) checks if user with provided email already exists in db. 
    
 if (userData) {
    res.status(400)
    throw new Error('USER ALREADY EXISTS')
 } else {
    //if no existing user is found -->passes and saves user details to the database
    new Models.User({firstName, lastName, emailId, employeeId, password })
        .save()
        .then(savedUser => res.send({ result: 200, data: savedUser }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
})

// Login user (LoginForm.jsx)
exports.loginUser = asyncHandler(async (req, res) => {
  const { emailId, password } = req.body;
  const user = await Models.User.findOne({ emailId });

  if (!user) {
    res.status(400);
    throw new Error('USER NOT FOUND');
  } else {
  // Perform login authentication logic here
  if (password !== user.password) {
    res.status(401);
    throw new Error('INVALID PASSWORD');
  } else {
    // Password matches, login successful
    res.send({ result: 200, data: user });
  }
}

})