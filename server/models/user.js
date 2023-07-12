//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating user schema for user collection 
const userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    employeeId: {type: Number, min: 1000, max: 9999, required: true, unique: true}, //allows values between 1000 and 9999
    emailId: {type: String, trim: true, required: true, unique:true },
    password: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model("user", userSchema);