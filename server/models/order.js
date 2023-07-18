//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   orderID: {type: String, trim: true, required: true}, //from MongoDB 
   title: {type: String, trim: true, required: true}, //key name (From Postman and API)
   price: {type: String, trim: true, required: true},
   quantities: {type: Number, trim: true, required: true},
   totalprice: {type: String, trim: true, required: true}, 
})

module.exports = mongoose.model("order", orderSchema);