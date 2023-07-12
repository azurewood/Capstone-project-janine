//npm init 
//npm install express
//npm install dotenv (Way to read in configuration for application)
//npm install nodemon
//npm install mongoose --save (an object data modelling library - provides simple and structured way to work with MongoDB)
//npm install axios
//To start the server - npm start 

const express = require("express");
const app = express();
require("dotenv").config();

//importing dbConnect.js into our server.js file 
let dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());

//stops CORS browser error (npm install cors)
let cors = require("cors");
app.use(cors())

//create route/path to our routes

let mealRoutes = require('./routes/mealRoutes')
app.use('/mealapi/routes', mealRoutes)

let userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)

let authRoutes = require('./routes/authRoutes')
app.use('/auth', authRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests. Defining PORT as a variable 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});