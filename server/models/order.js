//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   title: {type: String, required: true}, //key name (From Postman and API)
   price: {type: Number, required: true},
   quantities: {type: Number, default: 1, required: true },
   totalprice: {type: Number, required: true}, 
}, {
   timestamps: true
});

module.exports = mongoose.model("order", orderSchema);