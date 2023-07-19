//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   orderID: {type: Schema.Types.ObjectId , trim: true}, //from MongoDB 
   title: {type: String, trim: true, required: true}, //key name (From Postman and API)
   price: {type: Number, trim: true, required: true},
   quantities: {type: Number, trim: true, required: true},
   totalprice: {type: Number, trim: true, required: true}, 
}, {
   timestamps: true
});

module.exports = mongoose.model("order", orderSchema);