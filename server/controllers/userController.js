"use strict"
let Models = require("../models");


const getUsers = (res) => {
    //finds all users
    Models.Post.find({})
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
}

// takes two arguments (JSON and res obj) and creating new user using data created from request
const mongoose = require('mongoose');

const createUser = (data, res) => {
    data._id = new mongoose.Types.ObjectId(); // Generate a new _id

    new Models.User(data)
        .save()
        .then(savedUser => res.send({ result: 200, data: savedUser }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


const updateUser = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)

    Models.User.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
}
const deleteUser = (req, res) => {
    //deletes the user matching the ID from the param
    Models.User.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

module.exports = {
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser
};