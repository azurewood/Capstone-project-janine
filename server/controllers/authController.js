//when the person registers
//can put both sign in and register form
"use strict"
let Models = require("../models");
const mongoose = require('mongoose');
const asyncHandler = require('../middleware/asyncHandler')

const registerUser = asyncHandler(async (req, res) => {
 const {firstName, lastName, emailId, employeeId, password } = req.body
 const userData = await Models.User.findOne({emailId})
    
 if (userData) {
    res.status(400)
    throw new Error('USER ALREADY EXISTS')
 } else {

    //passing details to db to save it
    new Models.User({firstName, lastName, emailId, employeeId, password })
        .save()
        .then(savedUser => res.send({ result: 200, data: savedUser }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
})

module.exports = { 
    registerUser  
};