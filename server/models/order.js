//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   employeeID: {type: Number, min: 1000, max: 9999, required: true, unique: true}, 
   selected_meal: {type: String, trim: true, required: true}, //?mealID - check API
   quantities: {type: Number, trim: true, required: true},
   totalprice: {type: String, trim: true, required: true}, 
})

module.exports = mongoose.model("order", orderSchema);