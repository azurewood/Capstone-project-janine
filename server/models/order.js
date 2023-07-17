//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   employeeID: {type: Number, min: 1000, max: 9999, required: true, unique: true}, 
   title: {type: String, trim: true, required: true}, //name of the meal (From Postman and API)
   price: {type: String, trim: true, required: true},
   quantities: {type: Number, trim: true, required: true},
   totalprice: {type: String, trim: true, required: true}, 
})

module.exports = mongoose.model("order", orderSchema);