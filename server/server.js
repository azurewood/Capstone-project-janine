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

//create route/path to our routes
let APIDataRoute = require('./routes/APIDataRoute')
app.use('/api/routes', APIDataRoute)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests. Defining PORT as a variable 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});